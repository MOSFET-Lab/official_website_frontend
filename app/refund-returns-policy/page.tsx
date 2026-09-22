"use client";

import React from "react";

export default function RefundReturnsPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white px-4 sm:px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-bold">
            Refund and Returns Policy
          </h1>

          <p className="text-zinc-400 mt-4 text-sm">
            Last Updated: September 2026
          </p>
        </div>

        {/* POLICY CONTENT */}
        <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-8">

          <PolicySection title="1. Returns">
            MOSFET (Private) Limited aims to provide high-quality products and
            reliable services to all customers. If you are not satisfied with
            a product purchased from us, you may be eligible for a return or
            replacement subject to the conditions described in this policy.
            <br />
            <br />

            <strong className="text-white">
              Please Note:
            </strong>{" "}
            Products and services that are custom-designed, manufactured, or
            developed specifically according to a customer's requirements
            cannot normally be returned or refunded due to a change of mind
            after production or development has started.
            <br />
            <br />

            For standard physical products:
            <br />
            <br />

            i. Customers should contact MOSFET within <strong>5 days</strong>{" "}
            of receiving the product to request a return.
            <br />
            <br />

            ii. The product must be unused, undamaged, and in substantially the
            same condition in which it was received.
            <br />
            <br />

            iii. Where applicable, the product should be returned with its
            original packaging, accessories, components, and documentation.
            <br />
            <br />

            iv. MOSFET reserves the right to inspect returned products before
            approving a refund, replacement, or exchange.
            <br />
            <br />

            v. Return eligibility may vary depending on the nature of the
            product or service.
          </PolicySection>

          <PolicySection title="2. Refund Policy">
            At MOSFET, we strive to provide products and services that meet the
            agreed specifications and customer requirements. Refunds will be
            considered according to the circumstances of the order, product,
            service, and applicable terms agreed between MOSFET and the
            customer.
            <br />
            <br />

            If a refund is approved:
            <br />
            <br />

            i. Customers must contact MOSFET and receive confirmation before
            returning any product.
            <br />
            <br />

            ii. Approved returns must be sent to the return address provided by
            MOSFET.
            <br />
            <br />

            iii. Refunds will generally be made using the original payment
            method where reasonably possible.
            <br />
            <br />

            iv. Approved refunds may take approximately <strong>7–10 working
            days</strong> to process after the returned product has been
            received, inspected, and the refund has been approved.
            <br />
            <br />

            v. Original delivery or shipping charges are generally
            non-refundable unless the return is caused by an error attributable
            to MOSFET.
            <br />
            <br />

            vi. Return shipping costs are generally the responsibility of the
            customer unless the product supplied was incorrect, defective, or
            damaged due to an issue attributable to MOSFET.
          </PolicySection>

          <PolicySection title="3. Non-Refundable Products and Services">
            The following products, services, or circumstances may not be
            eligible for a refund:
            <br />
            <br />

            i. Products that have been used, modified, altered, physically
            damaged, improperly installed, or improperly operated by the
            customer.
            <br />
            <br />

            ii. Customized or personalized products manufactured according to
            customer specifications, except where the product is defective or
            incorrectly manufactured by MOSFET.
            <br />
            <br />

            iii. Custom 3D-printed products manufactured according to
            customer-approved designs, dimensions, colors, materials, or
            quantities, except where the defect or error is attributable to
            MOSFET.
            <br />
            <br />

            iv. Custom PCB modules, electronic assemblies, embedded systems,
            automation systems, machines, or prototypes developed according to
            approved specifications, except where otherwise agreed in writing.
            <br />
            <br />

            v. Software, source-code development, mobile applications, web
            applications, AI development, R&D, engineering design, CAD,
            fabrication, or other professional services where development or
            work has already commenced.
            <br />
            <br />

            vi. Special-order components, materials, or parts purchased
            specifically for a customer's project.
            <br />
            <br />

            vii. Products damaged as a result of incorrect voltage, wiring,
            installation, configuration, handling, modification, or other
            improper use by the customer.
            <br />
            <br />

            viii. Clearance, final-sale, or specially discounted items where
            the applicable quotation or invoice states that the item is
            non-refundable.
          </PolicySection>

          <PolicySection title="4. Exchanges and Replacements">
            MOSFET may provide a replacement or exchange where a physical
            product is confirmed to be defective, damaged during delivery, or
            supplied incorrectly.
            <br />
            <br />

            Customers should contact MOSFET within <strong>2 days</strong> of
            receiving the product and provide clear photographs or videos
            showing the issue.
            <br />
            <br />

            After reviewing the issue, MOSFET may, at its discretion and
            subject to the circumstances:
            <br />
            <br />

            i. Repair the product.
            <br />
            <br />

            ii. Replace the defective component or product.
            <br />
            <br />

            iii. Reprint a defective 3D-printed product.
            <br />
            <br />

            iv. Provide an exchange for the same or an equivalent product.
            <br />
            <br />

            v. Provide an approved refund where repair or replacement is not
            reasonably possible.
          </PolicySection>

          <PolicySection title="5. 3D Printed Products">
            3D-printed products are manufactured according to customer-approved
            requirements, including design, dimensions, material, color, and
            quantity.
            <br />
            <br />

            Customers are responsible for confirming the required design,
            dimensions, material, color, and other specifications before
            production begins.
            <br />
            <br />

            If a 3D-printed product is defective or incorrectly manufactured
            due to an error by MOSFET, MOSFET may reprint, replace, repair, or
            otherwise resolve the issue at no additional product cost, subject
            to inspection and verification.
            <br />
            <br />

            A change of mind, incorrect customer-provided specifications, or
            customer-requested changes after production has started will not
            normally qualify for a refund.
          </PolicySection>

          <PolicySection title="6. Custom Projects and Engineering Services">
            MOSFET provides custom engineering, AI, IoT, embedded systems, PCB,
            software, fabrication, machine development, product prototyping,
            and R&D services.
            <br />
            <br />

            Because these projects are developed according to individual
            customer requirements, payments made for work that has already been
            completed or commenced may not be refundable.
            <br />
            <br />

            Where a project is cancelled after work has started, MOSFET may
            deduct charges corresponding to work already completed, components
            or materials purchased, fabrication costs, third-party expenses,
            and other non-recoverable project costs.
            <br />
            <br />

            The specific payment, milestone, cancellation, revision, and
            refund conditions stated in the applicable quotation, agreement,
            invoice, or project contract will apply where such terms exist.
          </PolicySection>

          <PolicySection title="7. Order Cancellation Policy">
            Customers may request cancellation of an order before production,
            development, or shipment has reached a stage where cancellation is
            no longer reasonably possible.
            <br />
            <br />

            Cancellation requests should be submitted through WhatsApp, email,
            or another official MOSFET communication channel and should include
            the relevant quotation, invoice, order, or project reference.
            <br />
            <br />

            If an order or project has already been processed, manufactured,
            purchased, fabricated, developed, or otherwise commenced, MOSFET
            may deduct applicable costs from any approved refund.
            <br />
            <br />

            Such deductions may include:
            <br />
            <br />

            i. Materials and components already purchased.
            <br />
            <br />

            ii. Manufacturing, fabrication, printing, or assembly costs
            already incurred.
            <br />
            <br />

            iii. Development or engineering work already completed.
            <br />
            <br />

            iv. Third-party service or payment processing charges that are
            non-refundable.
            <br />
            <br />

            v. Other reasonable and non-recoverable costs directly related to
            the order or project.
            <br />
            <br />

            Once an order has been shipped or a completed custom product has
            been handed over, cancellation will generally not be possible.
          </PolicySection>

          <PolicySection title="8. Damaged, Defective, or Incorrect Products">
            If you receive a product that is damaged, defective, or different
            from the product or specifications agreed with MOSFET, please
            contact us within <strong>2 days</strong> of delivery.
            <br />
            <br />

            Please provide clear photographs or videos showing the product,
            packaging, and issue where applicable. This information may be
            required to evaluate the claim.
            <br />
            <br />

            After reviewing the issue, MOSFET will determine the appropriate
            solution, which may include repair, replacement, reprinting,
            exchange, or refund depending on the circumstances.
          </PolicySection>

          <PolicySection title="9. Return Shipping">
            Customers are responsible for securely packaging returned products
            to prevent damage during transportation.
            <br />
            <br />

            Unless otherwise agreed, return shipping costs are the
            responsibility of the customer.
            <br />
            <br />

            Where MOSFET confirms that the return is required because the
            product was incorrectly supplied, defective due to a manufacturing
            issue, or damaged before delivery, MOSFET may arrange or reimburse
            reasonable return shipping costs.
          </PolicySection>

          <PolicySection title="10. How to Initiate a Return or Refund">
            To request a return, replacement, exchange, or refund, please
            follow these steps:
            <br />
            <br />

            i. Contact MOSFET through WhatsApp or email and provide your order,
            quotation, invoice, or project reference.
            <br />
            <br />

            ii. Explain the reason for the return or refund request.
            <br />
            <br />

            iii. Provide photographs or videos where the request relates to a
            defective, damaged, or incorrect product.
            <br />
            <br />

            iv. Wait for confirmation and further instructions from MOSFET
            before shipping any product back.
            <br />
            <br />

            v. Pack the product securely with all applicable accessories,
            components, and documentation.
            <br />
            <br />

            vi. Return the product to the address provided by MOSFET.
          </PolicySection>

          <PolicySection title="11. Inspection and Approval">
            All returned products are subject to inspection.
            <br />
            <br />

            Receipt of a returned product does not automatically mean that a
            refund, exchange, or replacement has been approved.
            <br />
            <br />

            MOSFET will review the condition of the product, the reason for
            return, the original order or project requirements, and any
            applicable warranty or agreement before determining the appropriate
            resolution.
          </PolicySection>

          <PolicySection title="12. Contact Information">
            If you have any questions regarding this Refund and Returns Policy,
            or if you wish to request a return, replacement, exchange, or
            refund, please contact us using the following details.
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
              Our Commitment:
            </strong>{" "}
            We value our customers and aim to resolve legitimate product and
            service issues fairly and efficiently. If you experience a problem
            with an order or project, please contact MOSFET as soon as possible
            so that we can review the matter and determine an appropriate
            solution.
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