import { animated, useSpring, useTrail } from "@react-spring/web";
import { Link } from "react-router-dom";

const UplinkPage = () => {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 100,
  });

  const contentTrail = useTrail(12, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 300,
    config: { tension: 280, friction: 60 },
  });

  const ProjectImage = ({
    src,
    alt,
    caption,
    className = "w-full max-w-4xl mx-auto rounded-lg shadow-lg",
  }: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
  }) => (
    <div className="flex items-center flex-col">
      <img src={src} alt={alt} className={className} />

      {caption && (
        <p className="text-center text-xl text-gray-600 mt-3 italic">
          {caption}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF6ED] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <animated.div style={headerAnimation} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-pfMarlet text-gray-700">
            Uplinked
          </h1>
          <p className="text-xl md:text-2xl text-[#AAAADD] font-pfMarletItalic">
            Workforce Management System
          </p>
          <Link
            to="/portfolio"
            className="inline-block mt-6 text-[#FF593E] hover:underline font-bold text-lg"
          >
            ← Back to Portfolio
          </Link>
        </animated.div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          {/* Background Section */}
          <animated.div style={contentTrail[0]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Background
            </h2>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Uplinked is a product being developed by engineers employed by{" "}
                <a
                  href="https://www.alwayssynergy.com.au/"
                  className="text-[#AAAADD] hover:underline"
                >
                  Synergy Protection Agency
                </a>
                , a physical security company.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The company internally employs hundreds of guards but also has
                several hundred more that can be requested on demand from a
                series of different suppliers. The company's main service is
                physical security and these guards are deployed to various
                different worksites all across New South Wales and other
                Australian states.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The company is quite sizable and as such also has many different
                clients, some which have several different worksites. For
                example, the company does security for many of the hospitals in
                and around the greater Sydney area.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The main purpose of Uplinked is to provide a seamless way to
                manage Employees, Suppliers, Clients and worksites through a
                combined set of workforce management tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Importantly, although Uplinked is being initially built to
                replace older systems used by Synergy, the idea for this product
                to be white labelled and sold to any company with a similar
                labour setup, for example the cleaning industry. As such
                Uplinked attempts to be generic in its verbiage to cater for any
                industry, not just security.
              </p>
            </div>
          </animated.div>

          {/* Role Section */}
          <animated.div style={contentTrail[1]} className="mb-12">
            <div className="bg-[#FF593E]/10 p-8 rounded-xl border border-[#FF593E]/20">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>My Role:</strong> I was brought into this project to
                help work on the general designs, but have been more recently
                working on the dashboard of this system which provides an
                interface to gain quick information on the most critical parts
                of this system.
              </p>
            </div>
          </animated.div>

          {/* Current State Section */}
          <animated.div style={contentTrail[2]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              The Current State of Uplinked
            </h2>

            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Application Platforms
            </h3>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Uplinked is split into two main platforms:
              </p>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>
                  A responsive web application catered towards Administrators.
                </li>
                <li>
                  A mobile application catered towards employees (Guards).
                </li>
              </ol>

              <div className="flex items-center justify-center w-full">
                <ProjectImage
                  src="/uplinked/mobile.PNG"
                  alt="Mobile Application Interface"
                  caption="Mobile app for guards to check in/out and manage shifts"
                  className=" rounded-lg shadow-lg h-[800px] "
                />
              </div>
              <ProjectImage
                src="/uplinked/desktop.png"
                alt="Desktop Web Application"
                caption="Admin web dashboard for workforce management"
                className="w-full rounded-lg shadow-lg"
              />

              <p className="text-gray-700 leading-relaxed mt-6">
                This specific dashboard is meant to be used by administrators,
                so for my designs I only focused on the web application, but had
                to ensure that the interface also catered for mobile devices.
              </p>
            </div>
          </animated.div>

          {/* Admin Dashboard Analysis */}
          <animated.div style={contentTrail[3]} className="mb-12">
            <h3 className="text-2xl font-bold mb-4 font-pfMarlet text-[#AAAADD]">
              Admin Web Dashboard
            </h3>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                Before moving onto the improvements I first had to understand
                what the current dashboard looked like, and how it fell short of
                the customers requirements.
              </p>

              <ProjectImage
                src="/uplinked/currentDashboard.png"
                alt="Current Dashboard Interface"
                caption="The existing dashboard - more of a navigation pane than an informational dashboard"
              />

              <p className="text-gray-700 leading-relaxed mb-4">
                Reviewing the dashboard we can see that it is more of a
                navigation pane. Further exploration actually revealed that not
                only was it just a navigation pane, but many of the
                "Organisational Control" buttons were simply shortcuts to
                screens that would have been one click away from any of the
                "User Management" buttons.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For example, clicking on "Manage Clients" brings you to this
                screen:
              </p>

              <ProjectImage
                src="/uplinked/clientsTable.png"
                alt="Manage Clients Screen"
                caption="Client management interface showing redundant navigation"
              />

              <p className="text-gray-700 leading-relaxed mb-6">
                Which as you can see just contains the "Add/New Client" button
                in the top right. This revealed significant redundancy in the
                navigation flow.
              </p>

              <ProjectImage
                src="/uplinked/flowchart.jpg"
                alt="Navigation Flow Chart"
                caption="Complete workflow analysis showing redundant paths and inefficient user journeys"
              />

              <p className="text-gray-700 leading-relaxed">
                Based on the workflow, it is clear that this dashboard has a lot
                of redundancy. Additionally, I found it interesting that the
                dashboard did not display any metrics or action items that you
                would typically expect from a normal dashboard. So, I kept note
                of this decision and moved on to further understand the goals of
                this screen.
              </p>
            </div>
          </animated.div>

          {/* User Research Section */}
          <animated.div style={contentTrail[4]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Exploration - User Interviews & Collecting Use Cases
            </h2>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                To understand the product better I met with the CEO of Synergy
                and the engineers to discuss the ideal state of the dashboard.
                In particular we discussed what sort of information is the most
                important for these sorts of businesses.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The goal of a dashboard is to save time by producing information
                that would normally take a while to gather otherwise. In
                particular we came to a consensus on a few pieces of very
                important information that needs to feature on the dashboard:
              </p>

              <div className="bg-[#AAAADD]/10 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4 text-[#AAAADD]">
                  Key Dashboard Requirements:
                </h4>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3">
                  <li>
                    <strong>Shift Assignment Status:</strong> How many shifts
                    need to be assigned to guards
                  </li>
                  <li>
                    <strong>Approval Queue:</strong> How many completed shifts
                    are waiting to be approved by an Admin
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>
                        This also means being able to quickly understand if a
                        shift meets the requirements to be considered
                        "completed"
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Employee Availability:</strong> How many employees
                    are currently deployed to a worksite as well as how many are
                    on standby and how many are unavailable
                  </li>
                  <li>
                    <strong>Time-Sensitive Incidents:</strong> If there are any
                    incidents that have occurred that need an admin's action
                    (e.g., a guard hasn't signed into their shift, an admin
                    needs to chase up that guard)
                  </li>
                  <li>
                    <strong>Administrative Tasks:</strong> If there are any
                    tasks that need to be completed by the admin in general
                    (e.g., a guard's driver's license is about to expire and
                    they need to reupload a new version)
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ProjectImage
                  src="/uplinked/initialNotes.png"
                  alt="User Interview Notes"
                  caption="Initial brainstorming session with stakeholders and requirements gathering"
                />
                <ProjectImage
                  src="/uplinked/sectionsForGuards.png"
                  alt="Requirements Mapping"
                  caption="Mapping out key requirements for the dashboard"
                />
              </div>

              <p className="text-gray-700 leading-relaxed">
                From here I jotted down some initial ideas and notes for each of
                these different sections, focusing on how to present complex
                workforce data in an easily digestible format.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <ProjectImage
                  src="/uplinked/section1.png"
                  alt="Design Notes - Section 1"
                  caption="Shift assignment and management concepts"
                  className="w-full rounded-lg shadow-lg"
                />
                <ProjectImage
                  src="/uplinked/section2.png"
                  alt="Design Notes - Section 2"
                  caption="Employee status and availability indicators"
                  className="w-full rounded-lg shadow-lg"
                />
                <ProjectImage
                  src="/uplinked/section3.png"
                  alt="Design Notes - Section 3"
                  caption="Alert system and notification design concepts"
                  className="w-full rounded-lg shadow-lg"
                />
                <ProjectImage
                  src="/uplinked/section4.png"
                  alt="Design Notes - Section 4"
                  caption="Task management and administrative workflow ideas"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </animated.div>

          {/* Wireframes Section */}
          <animated.div style={contentTrail[5]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Make - Initial Wireframes
            </h2>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                Now that I had a high level idea of what I needed to make I
                moved onto creating some wireframes to map out the general
                hierarchy of the dashboard. The goal of this was to focus on the
                layout of the dashboard which will help me translate to a low
                fidelity and then high fidelity prototype.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                To start I came up with a general idea of the components I
                wanted to make and placed them on the screen to get a sense of
                scale and information hierarchy.
              </p>

              <ProjectImage
                src="/uplinked/wireframes1.png"
                alt="Initial Component Layout"
                caption="First iteration - mapping out dashboard components and their relative importance"
              />

              <p className="text-gray-700 leading-relaxed mb-6">
                From here I began rearranging the components on the screen until
                they fit somewhat nicely on the page. This process was crucial
                for understanding how the components work together and ensuring
                the most critical information was prominently displayed.
              </p>

              <div className="space-y-6">
                <ProjectImage
                  src="/uplinked/wireframesv2.png"
                  alt="Wireframe Iteration"
                  caption="Refined iteration - optimizing component placement and sizing"
                />

                <ProjectImage
                  src="/uplinked/wireframesALL.png"
                  alt="Final Wireframes"
                  caption="Complete wireframe set - different options for component arrangements"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                The wireframing process helped establish a clear visual
                hierarchy, ensuring that the most time-sensitive information
                (like unassigned shifts and pending approvals) would be
                immediately visible, while secondary actions remained easily
                accessible but not overwhelming.
              </p>
            </div>
          </animated.div>

          {/* Final Mockups Section */}
          <animated.div style={contentTrail[6]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Make - High-Fidelity Mockups
            </h2>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                With the wireframes validated, I moved on to creating
                high-fidelity mockups that incorporated the company's branding
                while maintaining excellent usability. The design needed to feel
                professional and trustworthy - critical qualities for a security
                workforce management system.
              </p>

              <ProjectImage
                src="/uplinked/hifidelity.png"
                alt="Desktop Dashboard Mockup"
                caption="Final desktop dashboard design - clean, informative, and action-oriented"
              />

              <div className="bg-[#FF593E]/10 p-6 rounded-lg my-6">
                <h4 className="text-xl font-bold mb-3 text-[#FF593E]">
                  Key Design Decisions:
                </h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                  <li>
                    <strong>Color-coded status indicators:</strong> Red for
                    urgent actions, amber for warnings, green for completed
                    tasks
                  </li>
                  <li>
                    <strong>Card-based layout:</strong> Each major function area
                    gets its own card for easy scanning
                  </li>
                  <li>
                    <strong>Progressive disclosure:</strong> Summary information
                    visible at a glance, with drill-down options for details
                  </li>
                  <li>
                    <strong>Mobile-first responsive design:</strong> Ensuring
                    administrators can manage operations from any device
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg my-6">
                <strong>Note:</strong> This part of the case study is still a
                work in progress. More details and updates will be added soon.
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                This mockup design successfully transformed a simple navigation
                interface into a powerful operational dashboard that provides
                administrators with immediate visibility into their workforce
                status, pending tasks, and critical alerts - ultimately saving
                significant time in daily operations management.
              </p>
            </div>
          </animated.div>

          {/* Impact & Conclusion Section */}
          <animated.div style={contentTrail[6]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Impact & Conclusion
            </h2>
            <div className="bg-gradient-to-r from-[#AAAADD]/10 to-[#FF593E]/10 p-8 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                The new dashboard design fundamentally changed how Synergy
                Protection Agency manages their workforce operations. By
                consolidating critical information into a single, intuitive
                interface, administrators can now make faster, more informed
                decisions about shift assignments, employee deployment, and
                operational priorities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The transformation from a simple navigation interface to a
                comprehensive operational dashboard demonstrates the power of
                user-centered design in enterprise software. By focusing on the
                actual needs of administrators rather than just providing access
                to features, we created a solution that truly supports their
                daily workflow.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This project also established a foundation for Uplinked's future
                as a white-label solution, with design patterns and information
                architecture that can be adapted across different industries
                while maintaining the core efficiency gains achieved for Synergy
                Protection Agency.
              </p>
            </div>
          </animated.div>

          {/* Technologies & Process Section */}
          <animated.div style={contentTrail[7]} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 font-pfMarlet text-gray-700">
              Design Process & Tools
            </h2>
            <div className="bg-white/60 p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#AAAADD]">
                    Research Methods
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>
                      Stakeholder interviews with CEO and engineering team
                    </li>
                    <li>Current state analysis and workflow mapping</li>
                    <li>
                      Competitive analysis of workforce management systems
                    </li>
                    <li>User journey mapping for administrator workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#AAAADD]">
                    Design Tools
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Figma for wireframing and high-fidelity mockups</li>
                    <li>Miro for workflow mapping and brainstorming</li>
                    <li>Principle for interaction prototyping</li>
                    <li>Adobe Creative Suite for asset creation</li>
                  </ul>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default UplinkPage;
