import type { Metadata } from "next";
import SectionNavigation from "./SectionNavigation";

export const metadata: Metadata = {
  title: "Privacy Policy | Tiko Alarm",
  description:
    "Learn how Tiko Alarm handles alarm data, permissions, app blocking, and your privacy.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "data", label: "Data we use" },
  { id: "permissions", label: "Permissions" },
  { id: "sharing", label: "Sharing" },
  { id: "choices", label: "Your choices" },
  { id: "children", label: "Children" },
  { id: "updates", label: "Updates" },
  { id: "contact", label: "Contact" },
];

const permissions = [
  {
    icon: "⏰",
    title: "Alarms & notifications",
    text: "Used to schedule alarms, show reminders, play alarm sounds, and display alarm controls—even when the app is not open.",
  },
  {
    icon: "🏃",
    title: "Motion & activity",
    text: "Used only when you choose a mission or feature that needs step or motion information.",
  },
  {
    icon: "🛡",
    title: "Screen Time & app blocking",
    text: "If you enable Snooze Penalty, Tiko uses iOS Screen Time or Android Accessibility access to block only the apps you select for the interval you choose.",
  },
  {
    icon: "📷",
    title: "Camera",
    text: "Used only when you choose a QR or barcode mission. Camera images are processed for the mission and are not stored by Tiko.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tiko Alarm home">
          <img src="/tiko-logo.png" alt="Tiko Alarm" />
        </a>
        <a className="header-link" href="#contact">
          Privacy help
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Privacy, made simple
          </div>
          <h1>
            Your mornings are personal.
            <span> Your data should be too.</span>
          </h1>
          <p className="hero-intro">
            Tiko Alarm is designed to work primarily on your device. This
            policy explains what information the app uses, why permissions are
            requested, and the choices you control.
          </p>
          <div className="updated">Last updated: July 29, 2026</div>
        </div>
        <div className="mascot-wrap">
          <div className="mascot-orbit orbit-one" />
          <div className="mascot-orbit orbit-two" />
          <img
            className="mascot"
            src="/tiko-mascot.png"
            alt="Tiko, the friendly alarm clock mascot"
          />
        </div>
      </section>

      <div className="content-shell">
        <aside className="toc">
          <p>On this page</p>
          <SectionNavigation sections={sections} />
          <div className="privacy-note">
            <span>✓</span>
            <p>
              <strong>No selling data.</strong>
              <br />
              No third-party advertising profiles.
            </p>
          </div>
        </aside>

        <article className="policy">
          <section id="overview">
            <div className="section-label">01 · Overview</div>
            <h2>Privacy at a glance</h2>
            <p>
              Tiko Alarm helps you create alarms, complete wake-up missions,
              receive reminders, and optionally discourage snoozing by
              temporarily blocking apps you choose.
            </p>
            <div className="summary-grid">
              <div className="summary-card">
                <span>⌁</span>
                <h3>Local by design</h3>
                <p>Alarm settings and preferences are stored on your device.</p>
              </div>
              <div className="summary-card">
                <span>◎</span>
                <h3>You stay in control</h3>
                <p>Optional permissions can be changed in device settings.</p>
              </div>
              <div className="summary-card">
                <span>♢</span>
                <h3>No data sales</h3>
                <p>We do not sell or rent your personal information.</p>
              </div>
            </div>
          </section>

          <section id="data">
            <div className="section-label">02 · Data we use</div>
            <h2>Information handled by Tiko</h2>
            <p>
              The app may process the following information to provide the
              features you choose:
            </p>
            <ul className="check-list">
              <li>
                <span>✓</span>
                <div>
                  <strong>Alarm and preference data</strong>
                  <p>
                    Alarm times, labels, repeat schedules, sounds, snooze
                    settings, themes, missions, and onboarding choices.
                  </p>
                </div>
              </li>
              <li>
                <span>✓</span>
                <div>
                  <strong>Mission progress</strong>
                  <p>
                    Information needed to verify a mission, such as answers,
                    steps, or a scanned code.
                  </p>
                </div>
              </li>
              <li>
                <span>✓</span>
                <div>
                  <strong>Selected blocked apps</strong>
                  <p>
                    System-provided identifiers for apps you choose for Snooze
                    Penalty. Selection is managed through device controls.
                  </p>
                </div>
              </li>
              <li>
                <span>✓</span>
                <div>
                  <strong>Basic device state</strong>
                  <p>
                    Permission status, app state, and operating-system
                    information required for alarms to work reliably.
                  </p>
                </div>
              </li>
            </ul>
            <div className="callout">
              <span>🔒</span>
              <p>
                <strong>No account is required.</strong> Tiko does not currently
                operate an account system or collect your name, contacts, or
                precise location.
              </p>
            </div>
          </section>

          <section id="permissions">
            <div className="section-label">03 · Permissions</div>
            <h2>Why Tiko asks for access</h2>
            <p>
              Tiko requests access only when it supports a feature. You can
              decline optional permissions, although the related feature may
              not work.
            </p>
            <div className="permission-list">
              {permissions.map((permission) => (
                <div className="permission-row" key={permission.title}>
                  <span className="permission-icon">{permission.icon}</span>
                  <div>
                    <h3>{permission.title}</h3>
                    <p>{permission.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="sharing">
            <div className="section-label">04 · Sharing</div>
            <h2>We do not sell your information</h2>
            <p>
              Tiko does not sell or rent personal information. The current app
              does not use third-party advertising or behavioral-tracking
              services.
            </p>
            <p>
              Information may be handled by Apple, Google, or your device
              manufacturer when their operating-system services deliver
              notifications, process purchases, provide Screen Time controls,
              or support app distribution. Their own privacy policies apply to
              those services.
            </p>
            <p>
              We may disclose information when required by law, to protect
              users, or to defend legal rights. Because Tiko is designed around
              local storage, we generally do not possess the content stored on
              your device.
            </p>
          </section>

          <section id="choices">
            <div className="section-label">05 · Your choices</div>
            <h2>You control your data and permissions</h2>
            <div className="choice-grid">
              <div>
                <strong>Change permissions</strong>
                <p>
                  Review or revoke notifications, motion, camera, Screen Time,
                  or Accessibility access in your device settings.
                </p>
              </div>
              <div>
                <strong>Remove alarm data</strong>
                <p>
                  Delete individual alarms in Tiko. Removing the app also
                  removes locally stored app data, subject to your device
                  backup settings.
                </p>
              </div>
              <div>
                <strong>Disable Snooze Penalty</strong>
                <p>
                  Turn the feature off or change selected apps and blocking
                  intervals at any time.
                </p>
              </div>
              <div>
                <strong>Ask a privacy question</strong>
                <p>
                  Use the developer contact shown on Tiko Alarm’s App Store or
                  Play Store listing.
                </p>
              </div>
            </div>
          </section>

          <section id="children">
            <div className="section-label">06 · Children</div>
            <h2>Children’s privacy</h2>
            <p>
              Tiko Alarm is a general-audience productivity app and is not
              directed to children under 13. We do not knowingly collect
              personal information from children. If you believe a child has
              provided personal information, contact us through the developer
              contact on the app-store listing.
            </p>
          </section>

          <section id="updates">
            <div className="section-label">07 · Updates</div>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy when Tiko’s features or legal
              requirements change. The “Last updated” date at the top will show
              when revisions take effect. Material changes may also be
              highlighted inside the app.
            </p>
          </section>

          <section id="contact" className="contact-section">
            <div>
              <div className="section-label">08 · Contact</div>
              <h2>Questions about privacy?</h2>
              <p>
                Contact the Tiko Alarm developer using the support details on
                the app’s official App Store or Google Play listing. Please
                include “Privacy” in your message so it can be handled
                promptly.
              </p>
            </div>
            <img src="/tiko-mascot.png" alt="" aria-hidden="true" />
          </section>
        </article>
      </div>

      <footer>
        <img src="/tiko-logo.png" alt="Tiko Alarm" />
        <p>Wake up on time. Keep your data yours.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
