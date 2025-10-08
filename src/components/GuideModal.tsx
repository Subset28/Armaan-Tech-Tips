import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  guideType: string | null;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  guideType,
}) => {
  const renderGuide = () => {
    switch (guideType) {
      case "restore-point":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">System Restore Point Setup</h3>
            <div className="space-y-3">
              <p><strong>Step 1:</strong> Open System Properties</p>
              <p><strong>Step 2:</strong> Click "System Protection" in the left sidebar</p>
              <p><strong>Step 3:</strong> Select your C: drive and click "Configure"</p>
              <p><strong>Step 4:</strong> Turn on system protection and set max usage to at least 15GB</p>
              <p><strong>Step 5:</strong> Click "Create" and name your restore point</p>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Always create a restore point before major system changes. This gives you a safety net if anything goes wrong.
                </p>
              </div>
            </div>
          </div>
        );

      case "power-plan":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Power Plan Optimization</h3>
            <div className="space-y-3">
              <p><strong>Step 1:</strong> Download Cory's Power Plan</p>
              <p><strong>Step 2:</strong> Open Command Prompt as Administrator</p>
              <p><strong>Step 3:</strong> Run: powercfg -import "path\to\CorysPowerPlan.pow"</p>
              <p><strong>Step 4:</strong> Go to Power Options and select "Cory's Power Plan"</p>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-sm text-green-800">
                  ⚡ <strong>Benefit:</strong> This power plan prioritizes performance over power saving, reducing input lag and improving responsiveness.
                </p>
              </div>
            </div>
          </div>
        );

      case "unpark-cpu":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">CPU Core Unparking</h3>
            <div className="space-y-3">
              <p><strong>Step 1:</strong> Download ParkControl or CPU Unpark tool</p>
              <p><strong>Step 2:</strong> Run as Administrator</p>
              <p><strong>Step 3:</strong> Set all cores to 100% (unparked)</p>
              <p><strong>Step 4:</strong> Apply changes and restart if prompted</p>
              <div className="bg-yellow-50 p-3 rounded-md">
                <p className="text-sm text-yellow-800">
                  ⚠️ <strong>Note:</strong> This ensures all CPU cores are always available for processing, preventing Windows from "parking" cores to save power.
                </p>
              </div>
            </div>
          </div>
        );

      case "services-optimization":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services Optimization</h3>
            <div className="space-y-3">
              <p><strong>Services to Disable:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bluetooth Support Service (if not using Bluetooth)</li>
                <li>Hyper-V services (if not virtualizing)</li>
                <li>Print Spooler (if not using printer)</li>
                <li>Windows Update Medic Service (can cause high CPU)</li>
                <li>QWAVE (Quality Windows Audio Video Experience)</li>
              </ul>
              <p><strong>How to Disable:</strong></p>
              <p>1. Open Services (services.msc)</p>
              <p>2. Right-click service → Properties</p>
              <p>3. Change Startup type to "Disabled"</p>
              <p>4. Stop the service if running</p>
            </div>
          </div>
        );

      case "windows-settings":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Windows Settings Optimization</h3>
            <div className="space-y-3">
              <p><strong>Display Settings:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Set refresh rate to highest available</li>
                <li>Disable animations and transparency effects</li>
                <li>Set power mode to "Best performance"</li>
              </ul>
              <p><strong>System Settings:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Turn off background apps</li>
                <li>Disable tips and suggestions</li>
                <li>Turn off notification sounds</li>
                <li>Set sound scheme to "No Sounds"</li>
              </ul>
            </div>
          </div>
        );

      case "gpu-optimization":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">GPU Driver Optimization</h3>
            <div className="space-y-3">
              <p><strong>NVIDIA Users:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use DDU (Display Driver Uninstaller) for clean install</li>
                <li>Install latest Game Ready drivers</li>
                <li>Disable HD Audio Controller in Device Manager</li>
                <li>Set Power Management to "Prefer Maximum Performance"</li>
              </ul>
              <p><strong>AMD Users:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Disable ULPS (Ultra Low Power State)</li>
                <li>Set GPU Workload to "Gaming"</li>
                <li>Disable Radeon Chill if not needed</li>
              </ul>
            </div>
          </div>
        );

      case "msi-afterburner":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">MSI Afterburner Setup</h3>
            <div className="space-y-3">
              <p><strong>Installation:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Download MSI Afterburner</li>
                <li>Uncheck RivaTuner Statistics Server during install</li>
                <li>Set to start with Windows and minimize to tray</li>
              </ul>
              <p><strong>Configuration:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Set monitoring update period to 1000ms</li>
                <li>Uncheck unnecessary monitoring items</li>
                <li>Set fan curve: 60°C→30%, 70°C→50%, 80°C→100%</li>
              </ul>
            </div>
          </div>
        );

      case "network-optimization":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Network Optimization</h3>
            <div className="space-y-3">
              <p><strong>DNS Optimization:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Test ping to 1.1.1.1 (Cloudflare) and 8.8.8.8 (Google)</li>
                <li>Use the faster DNS server as primary</li>
                <li>Set secondary to the other provider</li>
              </ul>
              <p><strong>Adapter Settings:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Disable unused network adapters</li>
                <li>Set as metered connection</li>
                <li>Disable power saving features</li>
                <li>Set Receive/Transmit buffers to 2048</li>
              </ul>
            </div>
          </div>
        );

      case "tcp-optimization":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">TCP Optimizer Setup</h3>
            <div className="space-y-3">
              <p><strong>Download TCP Optimizer:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Set your connection speed to maximum</li>
                <li>Select "Custom" settings</li>
                <li>Disable TCP Auto-Tuning</li>
                <li>Set Congestion Control Provider to "ctcp"</li>
                <li>Set Network Throttling Index to "disabled"</li>
              </ul>
              <p><strong>Advanced Settings:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Set Max User Port to 65534</li>
                <li>Set TCP Timed Wait Delay to 30</li>
                <li>Create backup before applying</li>
              </ul>
            </div>
          </div>
        );

      case "system-cleanup":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">System Cleanup Tools</h3>
            <div className="space-y-3">
              <p><strong>CCleaner Setup:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Run Health Check scan</li>
                <li>Clean temporary files and browser cache</li>
                <li>Run Registry scan and fix issues</li>
                <li>Uninstall CCleaner after use</li>
              </ul>
              <p><strong>Manual Cleanup:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Clear %temp% folder</li>
                <li>Clear Prefetch folder</li>
                <li>Empty Recycle Bin</li>
                <li>Run Disk Cleanup tool</li>
              </ul>
            </div>
          </div>
        );

      case "winutil-guide":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Chris Titus Tech's Windows Utility</h3>
            <div className="space-y-3">
              <p><strong>What is WinUtil?</strong></p>
              <p>WinUtil is a comprehensive PowerShell script created by Chris Titus Tech that automates Windows optimization, installation of essential software, debloating, and system troubleshooting. It's trusted by over 40,000 users for maintaining clean, optimized Windows systems.</p>

              <p><strong>🚀 Quick Start (Stable Version):</strong></p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                irm "https://christitus.com/win" | iex
              </div>

              <p><strong>🛠️ Development Version:</strong></p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                irm "https://christitus.com/windev" | iex
              </div>

              <p><strong>📦 Key Features:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Install Tab:</strong> Essential software, browsers, development tools, gaming software</li>
                <li><strong>Tweaks Tab:</strong> Performance optimizations, privacy settings, UI customizations</li>
                <li><strong>Config Tab:</strong> System configuration, feature enable/disable, Windows updates</li>
                <li><strong>Updates Tab:</strong> Windows update management and troubleshooting</li>
              </ul>

              <p><strong>⚡ Performance Benefits:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Removes Windows bloatware and unnecessary services</li>
                <li>Optimizes system settings for better performance</li>
                <li>Disables telemetry and data collection</li>
                <li>Improves privacy and security settings</li>
                <li>Speeds up system boot times</li>
              </ul>

              <p><strong>🛡️ Safety Features:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Must be run as Administrator for system changes</li>
                <li>Creates system restore points before major changes</li>
                <li>Includes backup and restore functionality</li>
                <li>Well-documented and community-tested</li>
              </ul>

              <p><strong>💻 Installation Categories:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Browsers:</strong> Chrome, Firefox, Edge, Brave</li>
                <li><strong>Development:</strong> VS Code, Git, Node.js, Python</li>
                <li><strong>Utilities:</strong> 7-Zip, VLC, LibreOffice, Notepad++</li>
                <li><strong>Gaming:</strong> Steam, Epic Games, Ubisoft Connect</li>
                <li><strong>Communications:</strong> Discord, Teams, Zoom</li>
              </ul>

              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-blue-800">
                  💡 <strong>Pro Tip:</strong> Run WinUtil after a fresh Windows installation for the best results. Always create a system restore point first!
                </p>
              </div>
            </div>
          </div>
        );

      case "programming-basics":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Programming Fundamentals</h3>
            <div className="space-y-3">
              <p><strong>Getting Started:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Choose a beginner-friendly language (Python, JavaScript)</li>
                <li>Set up your development environment</li>
                <li>Learn basic syntax and data types</li>
                <li>Practice with simple projects</li>
              </ul>
              <p><strong>Key Concepts:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Variables and constants</li>
                <li>Functions and methods</li>
                <li>Loops and conditionals</li>
                <li>Arrays and objects</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-blue-800">
                  💡 <strong>Resources:</strong> freeCodeCamp, Codecademy, MDN Web Docs
                </p>
              </div>
            </div>
          </div>
        );

      case "math-resources":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Math Learning Resources</h3>
            <div className="space-y-3">
              <p><strong>Online Platforms:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Khan Academy - Interactive math lessons</li>
                <li>Art of Problem Solving - Advanced mathematics</li>
                <li>Brilliant.org - Challenge-based learning</li>
                <li>Mathigon - Visual mathematics</li>
              </ul>
              <p><strong>Topics to Master:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Algebra fundamentals</li>
                <li>Geometry and trigonometry</li>
                <li>Calculus basics</li>
                <li>Statistics and probability</li>
              </ul>
            </div>
          </div>
        );

      case "study-methods":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Effective Study Techniques</h3>
            <div className="space-y-3">
              <p><strong>Pomodoro Technique:</strong></p>
              <p>Study for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer break.</p>
              <p><strong>Active Recall:</strong></p>
              <p>Test yourself on material instead of just re-reading notes.</p>
              <p><strong>Spaced Repetition:</strong></p>
              <p>Review information at increasing intervals to improve long-term retention.</p>
              <p><strong>Feynman Technique:</strong></p>
              <p>Explain complex topics in simple terms as if teaching someone else.</p>
            </div>
          </div>
        );

      case "science-experiments":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Home Science Experiments</h3>
            <div className="space-y-3">
              <p><strong>Easy Physics Experiments:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Balloon rocket - Demonstrate Newton's laws</li>
                <li>Homemade electroscope - Static electricity</li>
                <li>Sinking/floating objects - Density demonstration</li>
                <li>Magnet experiments - Magnetic fields</li>
              </ul>
              <p><strong>Chemistry at Home:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Vinegar + baking soda reaction</li>
                <li>Homemade slime (PVA glue + borax)</li>
                <li>Acid-base indicators with red cabbage</li>
                <li>Crystallization with salt solutions</li>
              </ul>
            </div>
          </div>
        );

      case "language-learning":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Language Learning Resources</h3>
            <div className="space-y-3">
              <p><strong>Free Platforms:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Duolingo - Gamified language learning</li>
                <li>Memrise - Spaced repetition system</li>
                <li>Babbel - Structured courses</li>
                <li>Busuu - Community-based learning</li>
              </ul>
              <p><strong>Learning Tips:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Practice daily for 15-30 minutes</li>
                <li>Focus on useful vocabulary first</li>
                <li>Listen to podcasts in target language</li>
                <li>Find language exchange partners</li>
              </ul>
            </div>
          </div>
        );

      case "tech-concepts":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technology Concepts Explained</h3>
            <div className="space-y-3">
              <p><strong>Computer Architecture:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>CPU vs GPU - Processing vs Graphics</li>
                <li>RAM vs Storage - Memory vs Permanent storage</li>
                <li>Cache hierarchy - L1/L2/L3 cache levels</li>
                <li>Binary system - How computers count</li>
              </ul>
              <p><strong>Networking Basics:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>IP addresses - Device identification</li>
                <li>HTTP vs HTTPS - Secure web communication</li>
                <li>DNS - Domain name resolution</li>
                <li>Latency vs Bandwidth - Speed vs Capacity</li>
              </ul>
            </div>
          </div>
        );

      case "cool-websites":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cool Websites Collection</h3>
            <div className="space-y-3">
              <p><strong>Productivity Tools:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Notion - All-in-one workspace</li>
                <li>Obsidian - Knowledge management</li>
                <li>Roam Research - Networked thinking</li>
                <li>Forest app - Focus timer with trees</li>
              </ul>
              <p><strong>Learning Platforms:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>freeCodeCamp - Coding curriculum</li>
                <li>Khan Academy - Free education</li>
                <li>Coursera/edX - University courses</li>
                <li>YouTube - Video learning</li>
              </ul>
            </div>
          </div>
        );

      case "tech-news":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tech News & Updates</h3>
            <div className="space-y-3">
              <p><strong>Reliable Sources:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>TechCrunch - Startup and tech news</li>
                <li>The Verge - Consumer technology</li>
                <li>Ars Technica - In-depth tech analysis</li>
                <li>Wired - Technology and culture</li>
              </ul>
              <p><strong>Developer News:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hacker News - Tech community discussions</li>
                <li>Dev.to - Developer community</li>
                <li>GitHub Trending - Popular repositories</li>
                <li>Product Hunt - New products</li>
              </ul>
            </div>
          </div>
        );

      case "community-projects":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Open Source Community Projects</h3>
            <div className="space-y-3">
              <p><strong>Popular Projects:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Linux - Open source operating system</li>
                <li>React - JavaScript library for UI</li>
                <li>Python - Programming language</li>
                <li>VS Code - Code editor</li>
              </ul>
              <p><strong>How to Contribute:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Start with documentation fixes</li>
                <li>Look for "good first issue" labels</li>
                <li>Join community discussions</li>
                <li>Submit pull requests</li>
              </ul>
            </div>
          </div>
        );

      case "helpful-links":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Helpful Links Directory</h3>
            <div className="space-y-3">
              <p><strong>Development Tools:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Stack Overflow - Programming Q&A</li>
                <li>MDN Web Docs - Web development reference</li>
                <li>Can I Use - Browser compatibility</li>
                <li>GitHub - Code hosting and collaboration</li>
              </ul>
              <p><strong>Design Resources:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Dribbble - Design inspiration</li>
                <li>Unsplash - Free stock photos</li>
                <li>Google Fonts - Typography</li>
                <li>Figma - Design tool</li>
              </ul>
            </div>
          </div>
        );

      case "software-recommendations":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Essential Software Recommendations</h3>
            <div className="space-y-3">
              <p><strong>Productivity:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>VS Code - Code editor</li>
                <li>Notion - Note-taking and organization</li>
                <li>Obsidian - Knowledge management</li>
                <li>ShareX - Screenshot and screen recording</li>
              </ul>
              <p><strong>Utilities:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>7-Zip - File archiver</li>
                <li>qBittorrent - Torrent client</li>
                <li>VeraCrypt - Disk encryption</li>
                <li>Everything - File search tool</li>
              </ul>
            </div>
          </div>
        );

      case "tips-tricks":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tips & Tricks Compilation</h3>
            <div className="space-y-3">
              <p><strong>Keyboard Shortcuts:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Win + Shift + S - Screenshot tool</li>
                <li>Win + V - Clipboard history</li>
                <li>Win + . - Emoji picker</li>
                <li>Ctrl + Shift + Esc - Task Manager</li>
              </ul>
              <p><strong>Windows Tips:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use Windows key + number to open taskbar apps</li>
                <li>Alt + Tab to switch between windows</li>
                <li>Win + L to lock your computer</li>
                <li>Use Focus Assist to reduce distractions</li>
              </ul>
            </div>
          </div>
        );
    }
  };

  const getGuideTitle = () => {
    switch (guideType) {
      case "restore-point": return "System Restore Point";
      case "power-plan": return "Power Plan Optimization";
      case "unpark-cpu": return "CPU Core Unparking";
      case "services-optimization": return "Services Optimization";
      case "windows-settings": return "Windows Settings";
      case "gpu-optimization": return "GPU Driver Optimization";
      case "msi-afterburner": return "MSI Afterburner Setup";
      case "network-optimization": return "Network Optimization";
      case "tcp-optimization": return "TCP Optimizer";
      case "system-cleanup": return "System Cleanup";
      case "complete-guide": return "Complete Optimization Guide";
      case "winutil-guide": return "Chris Titus Tech's Windows Utility";
      case "programming-basics": return "Programming Fundamentals";
      case "math-resources": return "Math Resources";
      case "study-methods": return "Study Techniques";
      case "science-experiments": return "Science Experiments";
      case "language-learning": return "Language Learning";
      case "tech-concepts": return "Technology Concepts";
      case "cool-websites": return "Cool Websites";
      case "tech-news": return "Tech News";
      case "community-projects": return "Community Projects";
      case "helpful-links": return "Helpful Links";
      case "software-recommendations": return "Software Recommendations";
      case "tips-tricks": return "Tips & Tricks";
      default: return "Guide";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getGuideTitle()}</DialogTitle>
          <DialogDescription>
            Step-by-step optimization guide
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {renderGuide()}
        </div>
      </DialogContent>
    </Dialog>
  );
};
