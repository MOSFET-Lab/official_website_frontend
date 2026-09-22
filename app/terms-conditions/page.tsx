"use client";

import React from "react";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white px-4 sm:px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold">
            Terms & Conditions
          </h1>

          <p className="text-zinc-400 mt-4 text-sm">
            Last Updated: September 2026
          </p>
        </div>

        {/* TERMS CONTENT */}
        <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-8">

          <PolicySection title="1. Conditions of Use">
            Welcome to the MOSFET website. MOSFET (Private) Limited
            ("MOSFET", "we", "our", or "us") provides products, services, and
            information through our Website and other official communication
            channels.
            <br />
            <br />

            By accessing, browsing, or using our Website, purchasing our
            products, requesting our services, or communicating with us
            regarding a project, you acknowledge that you have read,
            understood, and agree to be bound by these Terms & Conditions.
            <br />
            <br />

            If you do not agree with these Terms & Conditions, please do not
            use our Website or purchase our products or services.
          </PolicySection>

          <PolicySection title="2. Products and Services">
            MOSFET provides technology products and professional engineering
            services, including but not limited to:
            <br />
            <br />

            i. 3D Printed Lamp Shades and Table Lamps.
            <br />
            <br />

            ii. Custom 3D Printed Products and Electronic Enclosures.
            <br />
            <br />

            iii. IoT PCB Modules and Embedded System Hardware.
            <br />
            <br />

            iv. PCB Design and PCB Manufacturing.
            <br />
            <br />

            v. AI and Machine Learning Solutions.
            <br />
            <br />

            vi. IoT and Embedded System Development.
            <br />
            <br />

            vii. Mobile and Web Application Development.
            <br />
            <br />

            viii. Engineering Fabrication and Mechanical Development.
            <br />
            <br />

            ix. Machine Design and Development.
            <br />
            <br />

            x. Product Design, Prototyping, Automation, and R&D Projects.
            <br />
            <br />

            Product specifications, pricing, availability, project scope,
            delivery timelines, and other conditions may vary depending on the
            product or service.
          </PolicySection>

          <PolicySection title="3. Product Information and Availability">
            We make reasonable efforts to ensure that product descriptions,
            specifications, images, prices, and other information displayed on
            our Website are accurate and up to date.
            <br />
            <br />

            However, minor variations may occur between product images,
            prototypes, renders, and the final manufactured product, especially
            for 3D-printed, fabricated, electronic, or custom-made products.
            <br />
            <br />

            Product availability and prices may change without prior notice.
            MOSFET reserves the right to correct errors, update information,
            or discontinue products or services where necessary.
          </PolicySection>

          <PolicySection title="4. Orders and Quotations">
            Orders and project requests may be accepted through our Website,
            WhatsApp, email, telephone, or other official communication
            channels.
            <br />
            <br />

            A quotation issued by MOSFET may include product or service
            specifications, quantities, pricing, development costs, payment
            terms, estimated timelines, and other applicable conditions.
            <br />
            <br />

            A quotation does not necessarily constitute acceptance of an order.
            An order or project will be considered confirmed when the required
            payment, approval, agreement, or other confirmation specified by
            MOSFET has been received.
            <br />
            <br />

            MOSFET reserves the right to refuse or cancel an order where there
            is a reasonable business, technical, legal, payment, or
            availability-related reason.
          </PolicySection>

          <PolicySection title="5. Custom Products and Projects">
            Many MOSFET products and services are customized according to
            individual customer requirements.
            <br />
            <br />

            Customers are responsible for reviewing and approving the
            specifications, dimensions, designs, quantities, materials,
            colors, features, and other requirements before production or
            development begins.
            <br />
            <br />

            Once production or development has started, changes requested by
            the customer may result in additional costs, delays, material
            charges, engineering charges, or other applicable fees.
            <br />
            <br />

            Custom projects will be developed according to the scope agreed in
            the applicable quotation, agreement, or project documentation.
          </PolicySection>

          <PolicySection title="6. Pricing and Payments">
            All prices are stated in the applicable quotation, invoice,
            product listing, or other official communication from MOSFET.
            <br />
            <br />

            Unless otherwise stated, customers are responsible for making
            payments according to the agreed payment schedule.
            <br />
            <br />

            For custom projects, payments may be divided into multiple
            installments or milestones depending on the project scope.
            <br />
            <br />

            Additional costs may apply for customer-requested changes,
            additional features, additional revisions, extra materials,
            additional components, extended development, or work outside the
            original agreed scope.
            <br />
            <br />

            Domain registration, web hosting, cloud storage, third-party
            subscriptions, Google Play Store, Apple App Store, payment gateway
            charges, and other third-party costs are not included unless
            specifically stated in the applicable quotation.
          </PolicySection>

          <PolicySection title="7. Project Scope and Revisions">
            Custom development projects are completed according to the agreed
            project scope.
            <br />
            <br />

            Any included revision limits, development milestones, working
            hours, deliverables, and additional revision charges will be
            specified in the applicable quotation or agreement.
            <br />
            <br />

            Requests that substantially change the original project scope may
            be treated as additional work and may require a revised quotation
            or additional payment.
          </PolicySection>

          <PolicySection title="8. Delivery and Handover">
            Estimated delivery or completion dates provided by MOSFET are
            estimates unless a specific delivery date is expressly agreed in
            writing.
            <br />
            <br />

            Delivery timelines may be affected by component availability,
            manufacturing requirements, third-party services, customer
            approvals, design changes, technical difficulties, or other
            circumstances outside our reasonable control.
            <br />
            <br />

            For custom software, AI, IoT, embedded, PCB, engineering, and R&D
            projects, handover may include source code, hardware, documentation,
            design files, compiled applications, models, or other deliverables
            specifically identified in the applicable quotation or agreement.
          </PolicySection>

          <PolicySection title="9. Intellectual Property">
            Unless otherwise agreed in writing, all intellectual property,
            designs, source code, CAD files, graphics, documentation,
            methodologies, libraries, tools, templates, technologies, and
            materials owned or developed by MOSFET before a project remain the
            property of MOSFET or their respective owners.
            <br />
            <br />

            Customer-specific deliverables and ownership rights will be
            determined according to the applicable quotation, agreement, or
            written arrangement.
            <br />
            <br />

            Customers must not reproduce, distribute, resell, modify, or
            commercially exploit MOSFET's proprietary materials without
            appropriate authorization.
          </PolicySection>

          <PolicySection title="10. Customer-Provided Materials and Information">
            Customers may provide files, designs, CAD models, PCB layouts,
            source code, datasets, specifications, images, documents, or other
            materials for use in a project.
            <br />
            <br />

            Customers are responsible for ensuring that they have the legal
            right to provide such materials and that their use does not
            infringe the intellectual property, privacy, or other rights of
            third parties.
            <br />
            <br />

            MOSFET may rely on the accuracy and completeness of customer-
            provided information when carrying out a project.
          </PolicySection>

          <PolicySection title="11. Project Confidentiality">
            MOSFET understands that customers may provide confidential
            technical or commercial information during a project.
            <br />
            <br />

            We will use customer-provided project information for the purpose
            of providing the requested products or services and will take
            reasonable steps to protect such information.
            <br />
            <br />

            Confidential information will not intentionally be disclosed to
            unrelated third parties except where necessary to complete the
            requested work, required by law, or authorized by the customer.
          </PolicySection>

          <PolicySection title="12. Website Use">
            You agree to use the MOSFET Website only for lawful purposes.
            <br />
            <br />

            You must not:
            <br />
            <br />

            i. Attempt to gain unauthorized access to our Website, servers,
            systems, databases, or accounts.
            <br />
            <br />

            ii. Introduce malicious software, viruses, or harmful code.
            <br />
            <br />

            iii. Copy, reproduce, modify, or distribute Website content without
            authorization.
            <br />
            <br />

            iv. Use the Website for fraudulent, unlawful, abusive, or
            unauthorized purposes.
            <br />
            <br />

            v. Interfere with the operation, security, or availability of the
            Website.
          </PolicySection>

          <PolicySection title="13. Electronic Communications">
            When you visit our Website, submit information through our forms,
            send emails, communicate through WhatsApp, or otherwise contact
            MOSFET electronically, you are communicating with us electronically.
            <br />
            <br />

            You consent to receive communications from us electronically,
            including through email, WhatsApp, telephone, or other electronic
            communication methods where appropriate.
            <br />
            <br />

            You agree that electronic communications, notices, quotations,
            invoices, confirmations, and other communications provided by
            MOSFET may satisfy applicable requirements for written
            communication, subject to applicable law.
          </PolicySection>

          <PolicySection title="14. Copyright">
            All content included on the MOSFET Website, including text,
            graphics, logos, icons, images, photographs, videos, designs,
            software, documentation, product descriptions, and other materials,
            is owned by MOSFET or its respective content suppliers and is
            protected by applicable intellectual property and copyright laws.
            <br />
            <br />

            You may not reproduce, copy, distribute, modify, publish, or
            commercially use Website content without prior written permission
            from MOSFET or the relevant rights holder.
          </PolicySection>

          <PolicySection title="15. Trademarks">
            MOSFET names, logos, branding, graphics, and other trademarks or
            trade dress may not be used in connection with any product or
            service that is not provided by MOSFET in a manner that may cause
            confusion or imply unauthorized affiliation, sponsorship, or
            endorsement.
            <br />
            <br />

            All third-party trademarks appearing on our Website remain the
            property of their respective owners.
          </PolicySection>

          <PolicySection title="16. Third-Party Services and Links">
            Our Website or projects may use or link to third-party services,
            platforms, software, payment providers, hosting providers, APIs,
            libraries, or other external resources.
            <br />
            <br />

            Third-party services may have their own terms, conditions, privacy
            policies, fees, and limitations. MOSFET is not responsible for
            changes, interruptions, security issues, or policies of third-party
            services that are outside our reasonable control.
          </PolicySection>

          <PolicySection title="17. Limitation of Liability">
            MOSFET will take reasonable care when providing products and
            services. However, to the extent permitted by applicable law, MOSFET
            will not be responsible for losses resulting from misuse,
            unauthorized modification, incorrect installation, incorrect
            configuration, improper operation, or use of products or systems
            contrary to provided instructions or agreed specifications.
            <br />
            <br />

            For custom software, AI, IoT, embedded, automation, and R&D
            projects, system performance may depend on hardware, datasets,
            networks, third-party services, environmental conditions, and other
            factors outside MOSFET's control.
            <br />
            <br />

            Nothing in these Terms & Conditions is intended to exclude or limit
            any liability that cannot legally be excluded or limited under
            applicable law.
          </PolicySection>

          <PolicySection title="18. Product and Project Safety">
            Certain MOSFET products and projects may involve electricity,
            electronics, mechanical systems, moving parts, heat, water,
            batteries, power supplies, machinery, or other potentially
            hazardous components.
            <br />
            <br />

            Customers must follow all applicable installation, operating,
            electrical, mechanical, and safety instructions provided with the
            product or project.
            <br />
            <br />

            Customers should not modify, repair, rewire, or operate a product
            outside its intended specifications without appropriate technical
            knowledge and safety precautions.
          </PolicySection>

          <PolicySection title="19. Refunds and Returns">
            Refunds, returns, exchanges, replacements, and cancellations are
            subject to the MOSFET Refund and Returns Policy and any additional
            terms stated in the applicable quotation, invoice, or project
            agreement.
            <br />
            <br />

            Custom products and projects may have different cancellation and
            refund conditions because materials, components, manufacturing, and
            development work may begin specifically for a customer.
          </PolicySection>

          <PolicySection title="20. Changes to These Terms">
            MOSFET may update or modify these Terms & Conditions from time to
            time to reflect changes to our Website, products, services,
            business operations, technology, or applicable laws.
            <br />
            <br />

            Updated Terms & Conditions will be published on this page together
            with the updated date. Continued use of the Website after changes
            are published may constitute acceptance of the updated Terms,
            subject to applicable law.
          </PolicySection>

          <PolicySection title="21. Governing Law">
            These Terms & Conditions shall be interpreted and applied in
            accordance with the applicable laws of Sri Lanka, unless otherwise
            required by applicable law or agreed in a written contract between
            MOSFET and the customer.
            <br />
            <br />

            Any specific project agreement or contract entered into between
            MOSFET and a customer may contain additional terms that apply to
            that particular project or service.
          </PolicySection>

          <PolicySection title="22. Questions and Contact Information">
            Questions regarding these Terms & Conditions, our products,
            services, quotations, or projects can be directed to our support
            team using the contact details below.
            <br />
            <br />

            <strong className="text-white">
              MOSFET (Private) Limited
            </strong>

            <br />
            <br />

            Email:{" "}
            <a
              href="mailto:contact@mosfetlab.com"
              className="text-[#63b3ed] hover:underline"
            >
              contact@mosfetlab.com
            </a>

            <br />

            WhatsApp:{" "}
            <a
              href="https://wa.me/94767865190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63b3ed] hover:underline"
            >
              +94 76 786 5190
            </a>

            <br />

            Website:{" "}
            <a
              href="https://www.mosfetlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63b3ed] hover:underline"
            >
              www.mosfetlab.com
            </a>

            <br />
            <br />

            <strong className="text-white">
              MOSFET Team
            </strong>
          </PolicySection>

        </div>
      </div>
    </main>
  );
}

/* ================= REUSABLE SECTION ================= */

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}