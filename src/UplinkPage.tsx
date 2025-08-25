import { animated, useSpring, useTrail } from "@react-spring/web";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import OptimizedImage from "./components/OptimizedImage";

// Image Modal Component for click-to-zoom
interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, isZoomed, onClose]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.95)",
    config: { tension: 300, friction: 25 },
  });

  const backdropAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 25 },
  });

  const imageAnimation = useSpring({
    transform: isZoomed ? "scale(2)" : "scale(1)",
    config: { tension: 200, friction: 20 },
  });

  if (!isOpen) return null;

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleModalClose = () => {
    setIsZoomed(false);
    onClose();
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <animated.div
        style={backdropAnimation}
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={handleModalClose}
      />
      <animated.div
        style={modalAnimation}
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg bg-white shadow-2xl"
      >
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all"
          aria-label="Close"
        >
          ✕
        </button>
        <div
          className={`overflow-auto max-h-[90vh] ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
        >
          <animated.img
            src={src}
            alt={alt}
            style={imageAnimation}
            className={`w-full h-auto ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={handleImageClick}
          />
        </div>
      </animated.div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

// Clickable Image Component
interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

const ClickableImage = ({
  src,
  alt,
  className = "",
  caption,
}: ClickableImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center flex-col">
      <div
        className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full rounded-lg shadow-lg"
          aspectRatio="16/9"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="text-center text-xl text-gray-600 mt-3 italic">
          {caption}
        </p>
      )}
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const UplinkPage = () => {
  const trail = useTrail(15, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="min-h-screen bg-[#FFF6ED]/60 m-4 md:m-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <animated.div style={trail[0]} className="mb-8">
          <Link
            to="/portfolio"
            className="text-[#AAAADD] hover:underline font-bold text-lg"
          >
            ← Back to Portfolio
          </Link>
        </animated.div>

        {/* Hero Section */}
        <animated.div style={trail[1]} className="mb-16">
          <h1 className="text-6xl font-bold text-gray-700 mb-6 font-pfMarlet">
            Uplinked
          </h1>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <h3 className="font-bold text-[#AAAADD] mb-2">Challenge</h3>
              <p className="text-gray-700 mb-6">
                Improve the digital experience for Guards and Admins so they can
                easily use their mobile and web version of Uplinked. The
                existing platform was engineering-led with a lack of design
                direction and opinionated experience. I was brought in to
                redesign the interfaces, with this dashboard being my first
                project.
              </p>

              <h3 className="font-bold text-[#AAAADD] mb-2">Role & Timeline</h3>
              <p className="text-gray-700">
                <strong>Role:</strong> Driver, Product Management & Product
                Design
                <br />
                <strong>Timeline:</strong> 3 weeks intensive design sprint
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#AAAADD] mb-2">
                Platform Context
              </h3>
              <div className="text-gray-700 space-y-1">
                <p>
                  <strong>Web (Office):</strong> Admin experience - Manage
                  guards, clients, suppliers and guard shifts
                </p>
                <p>
                  <strong>Mobile (Onsite):</strong> Guard & Admin experience -
                  Field operations and shift management
                </p>
              </div>

              <h3 className="font-bold text-[#AAAADD] mb-2 mt-6">Impact</h3>
              <p className="text-gray-700">
                • Transformed a simple navigation interface into a comprehensive
                operational dashboard
                <p className="text-gray-700">
                  • Eliminated redundant workflows
                </p>
                <p className="text-gray-700">
                  • Improved admin efficiency for workforce management
                </p>
              </p>
            </div>
          </div>
        </animated.div>

        {/* The Current State */}
        <animated.div style={trail[2]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            The Current State of Uplinked
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Uplinked is a product being developed by engineers employed by{" "}
              <a
                href="https://www.alwayssynergy.com.au/"
                className="text-[#AAAADD] hover:underline"
              >
                Synergy Protection Agency
              </a>
              , a physical security company. The company internally employs
              hundreds of guards but also has several hundred more that can be
              requested on demand from different suppliers across New South
              Wales and other Australian states.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The main purpose of Uplinked is to provide a seamless way to
              manage Employees, Suppliers, Clients and worksites through a
              combined set of workforce management tools. Importantly, while
              initially built to replace older systems used by Synergy, the idea
              is for this product to be white labelled and sold to any company
              with a similar labour setup, such as the cleaning industry.
            </p>

            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Platform Architecture
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uplinked is split into two main platforms:
            </p>
            <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>
                A responsive web application catered towards Administrators
              </li>
              <li>A mobile application catered towards employees (Guards)</li>
            </ol>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <ClickableImage
                src="/uplinked/mobile.PNG"
                alt="Mobile Application Interface"
                caption="Mobile app for guards to check in/out and manage shifts"
                className="max-w-sm mx-auto"
              />
              <ClickableImage
                src="/uplinked/desktop.png"
                alt="Desktop Web Application"
                caption="Admin web dashboard for workforce management"
              />
            </div>
          </div>
        </animated.div>

        {/* Problem Analysis */}
        <animated.div style={trail[3]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Problem Analysis
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              The Existing Dashboard Problem
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The existing dashboard and home page navigation was confusing.
            </p>

            <ClickableImage
              src="/uplinked/currentDashboard.png"
              alt="Current Dashboard Interface"
              caption="The existing dashboard - more of a navigation pane than an informational dashboard"
            />

            <p className="text-gray-700 leading-relaxed mb-4 mt-6">
              Reviewing the dashboard revealed it was more of a navigation pane.
              Many of the "Organisational Control" buttons were simply shortcuts
              to screens that would have been one click away from the "User
              Management" buttons.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For example, clicking on "Manage Clients" brings you to a screen
              that just contains the "Add/New Client" button in the top right,
              revealing significant redundancy in the navigation flow. The full
              map of this dashboard's navigation flow is shown below.
            </p>

            <ClickableImage
              src="/uplinked/flowchart.jpg"
              alt="Navigation Flow Chart"
              caption="Complete workflow analysis showing redundant paths and inefficient user journeys"
            />
          </div>
        </animated.div>

        {/* User Research & Requirements */}
        <animated.div style={trail[4]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Exploration - User Research & Requirements Gathering
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              To understand the product better I met with the CEO of Synergy and
              the engineers to discuss the ideal state of the dashboard. The CEO
              described that often there would be a series of tasks to be
              completed by administrators. For example updating security
              licenses or checking on guards currently on site. I initially
              proposed a tasks list then realized everything an admin does could
              potentially be a task. So I decided to map out all aspects of the
              application to understand different use cases.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ClickableImage
                src="/uplinked/initialNotes.png"
                alt="Initial brainstorming session notes"
                caption="Notes on all the potential use cases and requirements gathering"
              />
              <ClickableImage
                src="/uplinked/sectionsForGuards.png"
                alt="Requirements mapping for guards"
                caption="Mapping out key requirements for different user types"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              The goal of a dashboard is to save time by producing information
              that would normally take a while to gather otherwise. In
              particular we came to a consensus on key pieces of critical
              information that needs to feature on the dashboard.
            </p>
            <div className="bg-[#AAAADD]/10 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4 text-[#AAAADD]">
                Key Dashboard Requirements Identified:
              </h4>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
                <li>
                  <strong>Shift Assignment Status:</strong> How many shifts need
                  to be assigned to guards
                </li>
                <li>
                  <strong>Approval Queue:</strong> How many completed shifts are
                  waiting to be approved by an Admin
                </li>
                <li>
                  <strong>Employee Availability:</strong> Current deployment
                  status, standby, and unavailable guards
                </li>
                <li>
                  <strong>Time-Sensitive Incidents:</strong> Critical alerts
                  requiring immediate admin action
                </li>
                <li>
                  <strong>Administrative Tasks:</strong> License renewals,
                  credential updates, and compliance items
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              From here I jotted down initial ideas and notes for each of these
              different sections, focusing on how to present complex workforce
              data in an easily digestible format.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <ClickableImage
                src="/uplinked/section1.png"
                alt="Design Notes - Section 1"
                caption="Shift assignment concepts"
              />
              <ClickableImage
                src="/uplinked/section2.png"
                alt="Design Notes - Section 2"
                caption="Employee status indicators"
              />
              <ClickableImage
                src="/uplinked/section3.png"
                alt="Design Notes - Section 3"
                caption="Alert system design"
              />
              <ClickableImage
                src="/uplinked/section4.png"
                alt="Design Notes - Section 4"
                caption="Task management workflow"
              />
            </div>
          </div>
        </animated.div>

        {/* Wireframes Section */}
        <animated.div style={trail[5]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Make - Initial Wireframes
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              Now that I had a high level idea of what I needed to make I moved
              onto creating some wireframes to map out the general hierarchy of
              the dashboard. The goal was to focus on the layout which would
              help me to create low fidelity and then high fidelity prototypes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              To start I came up with a general idea of the components I wanted
              to make and placed them on the screen to get a sense of scale and
              construct an information hierarchy.
            </p>

            <ClickableImage
              src="/uplinked/wireframes1.png"
              alt="Initial Component Layout"
              caption="First iteration - mapping out dashboard components and their relative importance"
            />

            <p className="text-gray-700 leading-relaxed mb-6 mt-6">
              From here I began rearranging the components on the screen until
              they fit nicely on the page. This process was crucial for
              understanding how the components work together and ensuring the
              most critical information was prominently displayed.
            </p>

            <div className="space-y-6">
              <ClickableImage
                src="/uplinked/wireframesv2.png"
                alt="Wireframe Iteration"
                caption="Refined iteration - optimizing component placement and sizing"
              />

              <ClickableImage
                src="/uplinked/wireframesALL.png"
                alt="Final Wireframes"
                caption="Complete wireframe set - different options for component arrangements"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              The wireframing process helped establish a clear visual hierarchy,
              ensuring that the most time-sensitive information (like unassigned
              shifts and pending approvals) would be immediately visible, while
              secondary actions remained easily accessible but not overwhelming.
            </p>
          </div>
        </animated.div>

        {/* Design Iterations */}
        <animated.div style={trail[6]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Layout Strategy & Design Decisions
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              To simplify the dashboard for users I explored three different
              layout options including varying navigation patterns: no scroll
              option, scroll option and using tabs. I needed to decide on the
              optimal approach for presenting this data.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ClickableImage
                src="/uplinked/noscrollLayout.jpeg"
                alt="No Scroll Layout Option"
                caption="No scroll version - fixed viewport approach"
              />
              <ClickableImage
                src="/uplinked/scrollBar.jpeg"
                alt="Scroll Layout Option"
                caption="Scroll version - expandable content areas"
              />
              <ClickableImage
                src="/uplinked/tabOption.jpeg"
                alt="Tab Layout Option"
                caption="Tab version - segmented information architecture"
              />
            </div>

            <div className="bg-[#AAAADD]/10 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3 text-[#AAAADD]">
                Design Decision: Optimized 'No Scroll' Approach
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                After evaluating all options, the best approach was an optimized
                'No Scroll' solution with internal scrolling capabilities. The
                scroll option would be harder to scale with additional features,
                and the tab option would hide important information requiring
                extra clicks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The optimized approach allows modules to scroll internally while
                maintaining the overall page layout, creating an "at-a-glance"
                benefit while gracefully handling variable amounts of data.
              </p>
            </div>
          </div>
        </animated.div>

        {/* Design Evolution */}
        <animated.div style={trail[7]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Design Evolution & Card Development
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              After some design reviews of the rough drafts, I went back to the
              drawing board to reimagine the arrangements and create higher
              fidelity designs. The card design needed to display relevant
              information without being too overwhelming.
            </p>

            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Initial Card Design Explorations
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <ClickableImage
                src="/uplinked/cardDesignsDrawings1.png"
                alt="Card Design Drawings Version 1"
                caption="Initial card design concepts - exploring data visualization approaches"
              />
              <ClickableImage
                src="/uplinked/cardDesignsDrawings2.png"
                alt="Card Design Drawings Version 2"
                caption="Refined card designs - simplified information display"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              After reviewing the first card design iteration, the data
              visualization wasn't as straightforward as needed. I decided to
              simplify the approach, focusing on making the information more
              digestible and actionable for administrators.
            </p>

            <ClickableImage
              src="/uplinked/higherFidelityCardDesigns.png"
              alt="Higher Fidelity Card Designs"
              caption="Evolved card designs with clearer information hierarchy and visual treatment"
            />
          </div>
        </animated.div>

        {/* Progressive Fidelity */}
        <animated.div style={trail[8]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Progressive Fidelity Development
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              From low-fidelity wireframes, I progressively added visual design
              elements, incorporating a color scheme of orange and blue with
              different shades to create clear visual hierarchy and status
              indicators for workforce management.
            </p>

            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Low-Fidelity Foundation
            </h3>
            <ClickableImage
              src="/uplinked/lowFidelityDashboardWeb.png"
              alt="Low Fidelity Dashboard"
              caption="Low-fidelity web dashboard establishing core layout and component structure"
            />

            <h3 className="text-2xl font-bold mb-4 mt-8 font-pfMarlet text-[#AAAADD]">
              Medium-Fidelity Refinement
            </h3>
            <ClickableImage
              src="/uplinked/mediumFidelity.png"
              alt="Medium Fidelity Dashboard"
              caption="Medium-fidelity iteration with initial visual design and content structure"
            />
            {/* Removed the placeholder note since we now embed real prototypes below */}
          </div>
        </animated.div>

        {/* Final High-Fidelity Designs */}
        <animated.div style={trail[9]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Final High-Fidelity Designs
          </h2>

          <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              The final high-fidelity designs incorporated user feedback,
              technical constraints, and business requirements into a cohesive
              operational dashboard.
            </p>

            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Web Dashboard - Desktop
            </h3>
            <div className="w-full flex justify-center mb-4">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/mvKf4FxeoRpzGIEP0cq1aO/Projects?node-id=267-58831&scaling=scale-down&content-scaling=fixed&page-id=19%3A110587&starting-point-node-id=269%3A59136&embed-host=share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-xl text-gray-600 mb-6 italic">
              Interactive desktop dashboard prototype
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8 font-pfMarlet text-[#AAAADD]">
              Mobile Dashboard - Field Operations
            </h3>
            <div className="w-full flex justify-center mb-4">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/mvKf4FxeoRpzGIEP0cq1aO/Projects?node-id=269-59136&p=f&scaling=scale-down&content-scaling=fixed&page-id=19%3A110587&starting-point-node-id=269%3A59136&embed-host=share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-xl text-gray-600 mb-6 italic">
              Interactive mobile dashboard prototype - field operations and
              on-the-go management.
            </p>

            <p className="text-gray-700 leading-relaxed mt-6">
              The mobile version maintains all critical functionality while
              optimizing for touch interactions and field use scenarios,
              ensuring administrators can utilise the application from anywhere.
            </p>
            {/* Removed the second placeholder note */}
          </div>
        </animated.div>

        {/* Impact & Learnings */}
        <animated.div style={trail[11]} className="mb-16">
          <h2 className="text-4xl font-bold mb-6 font-pfMarlet text-gray-700">
            Impact & Learnings
          </h2>

          <div className="bg-gradient-to-r from-[#AAAADD]/10 to-[#FF593E]/10 p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              The new dashboard design fundamentally transformed how Uplinked
              utilises their front page. By consolidating critical information
              into a single, intuitive interface, administrators can now make
              faster, more informed decisions about shift assignments, employee
              deployment, and operational priorities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#AAAADD]">
                  Key Outcomes
                </h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                  <li>Eliminated redundant navigation workflows</li>
                  <li>Reduced time to access critical information</li>
                  <li>Improved admin efficiency in workforce management</li>
                  <li>Created scalable design patterns for white-labeling</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#AAAADD]">
                  Design Learnings
                </h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                  <li>Importance of user research in enterprise contexts</li>
                  <li>Value of progressive fidelity in stakeholder buy-in</li>
                  <li>Critical role of information hierarchy in dashboards</li>
                  <li>
                    Benefits of internal scrolling vs. page-level scrolling
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This project established a foundation for Uplinked's future as a
              white-label solution, with design patterns and information
              architecture that can be adapted across different industries while
              maintaining the core efficiency gains achieved for Synergy
              Protection Agency.
            </p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default UplinkPage;
