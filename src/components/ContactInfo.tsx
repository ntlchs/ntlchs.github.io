import { contactInfo } from "src/utils/myInfo";

function ContactInfo() {
  return (
    <div className="max-w-xl w-full p-lg tablet:p-0 font-semibold">
      <div className="contact-info">
        <p id="email">
          {contactInfo.email}
          {/* <button onClick={() => copyToClipboard("email")}>Copiar</button> */}
        </p>
        <p id="phone">
          {contactInfo.phone}
          {/* <button onClick={() => copyToClipboard("phone")}>Copiar</button> */}
        </p>
      </div>
      {/* <div id="toast" className="toast">
        Copiado!
      </div> */}
    </div>
  );
}

export default ContactInfo;
