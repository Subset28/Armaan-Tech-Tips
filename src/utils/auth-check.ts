// Multi-layer obfuscation - NOT cryptographically secure
const s = (x: string) => btoa(x).split('').reverse().join('');
const d = (x: string) => atob(x.split('').reverse().join(''));

// Obfuscated credential hashes
const h1 = s('QXJtaW4yOA=='); // Reversed base64
const h2 = s('QXJtYWFuc1RlY2hUaXBz');

// XOR cipher
const x = (str: string, key: number) => {
  return str.split('').map((c, i) => 
    String.fromCharCode(c.charCodeAt(0) ^ (key + i))
  ).join('');
};

// Hash function
const h = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
};

// Verification with timing attack mitigation
export const v = (u: string, p: string): boolean => {
  try {
    const k = 42;
    const t1 = Date.now();
    
    // Decoy checks
    const dc1 = u.length > 0 && p.length > 0;
    const dc2 = u.charCodeAt(0) > 60;
    
    // Real check obfuscated
    const u1 = d(h1);
    const p1 = d(h2);
    
    const uh = h(x(u, k));
    const ph = h(x(p, k));
    const u1h = h(x(u1, k));
    const p1h = h(x(p1, k));
    
    // Timing delay to prevent analysis
    const delay = Math.max(0, 200 - (Date.now() - t1));
    if (delay > 0) {
      const end = Date.now() + delay;
      while (Date.now() < end) { /* timing */ }
    }
    
    return dc1 && dc2 && uh === u1h && ph === p1h;
  } catch {
    return false;
  }
};

// Session management with encrypted storage
const sk = '_s_t';
const ek = 73;

export const ss = () => {
  try {
    const v = localStorage.getItem(sk);
    if (!v) return false;
    const d = x(v, ek);
    return d === btoa('auth_' + new Date().toDateString());
  } catch {
    return false;
  }
};

export const cs = () => {
  try {
    const v = btoa('auth_' + new Date().toDateString());
    localStorage.setItem(sk, x(v, ek));
  } catch { /* ignore */ }
};

export const rs = () => {
  try {
    localStorage.removeItem(sk);
  } catch { /* ignore */ }
};
