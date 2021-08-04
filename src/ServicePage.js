import React from 'react';
import './ServicePage.css';
import Services from './Services';

export default function ServicePage() {
  return (
    <div className="home">
      <div className="home__row">
        <Services
          title="Annual Maintenance"
          description="Annual Maintenance means annual stability testing, sample storage, annual audit and annual updating of the e Drug Master File/ Chemistry, Manufacturing and Controls (“DMF/CMC”) elements of the NDA as required in accordance with Applicable Law shall remain with and be maintained by RTU . Annual Maintenance means routine maintenance and operation activities performed on an annual basis when the facility is open to public use. Sample 1 Based on 1 documents Save Copy."
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        />
        <Services
          title="DATA BACKUP SOLUTIONS"
          description="Data backup is a practice that combines techniques and solutions for efficient and cost-effective backup. Your data is copied to one or more locations, at pre-determined frequencies, and at different capacities. You can set up a flexible data backup operation, using your own architecture, or make use of available Backup as a Service (BaaS) solutions, mixing them up with local storage. Today, there are plenty of corporate storage TCO solutions to help you calculate costs, avoid data loss, and prevent data breaches."
          image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Services
          title="SERVER"
          description="A server is a computer that serves information to other computers. These computers, called clients, can connect to a server through either a local area network or a wide area network, such as the internet. A server is a vital piece of your IT infrastructure.
A server collects and sends information across a network. That can be a local network, like your business network, or a wider network across multiple locations.
Any computer running the right software can be a server. Although when we hear the word server we think of enormous, high-powered machines that push and pull data across the Web .
"
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Services
          title="Anti Virus Solution"
          description="Antivirus software, or anti-virus software (abbreviated to AV software), also known as anti-malware, is a computer program used to prevent, detect, and remove malware . Antivirus software was originally developed to detect and remove computer viruses, hence the name. However, with the proliferation of other kinds of malware, antivirus software started to provide protection from other computer threats. In particular, modern antivirus software can protect users from: malicious browser helper objects (BHOs), browser hijackers, ransomware, keyloggers, backdoors, rootkits, trojan horses, worms, malicious LSPs, dialers, fraudtools, adware and spyware . Some products also include protection from other computer threats, such as infected and malicious URLs, spam, scam and phishing attacks, online identity (privacy), online banking attacks, social engineering techniques, advanced persistent threat (APT) and botnet DDoS attacks."
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home__row">
        <Services
          title="Web hosting"
          description="When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website. Web hosting makes the files that comprise a website (code, images, etc.) available for viewing online. Every website you’ve ever visited is hosted on a server.
          The amount of space allocated on a server to a website depends on the type of hosting. The main types of hosting are shared, dedicated, VPS and reseller. They are differentiated by the kind of technology used for the server, the level of management provided and the additional services on offer
          "
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        <Services
          title="Email hosting"
          description="Email hosting is a service in which a hosting provider rents out email servers to its users. While there are free versions available with many hosting companies, many businesses take advantage of the flexibility and power of professional email services. Professional email hosting takes place when both incoming and outgoing emails are managed by a separate shared or dedicated mail server"
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}
