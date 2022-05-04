import './privacy.css';

export default function Privacy() {
  return (
    <div className='privacy-page'>
      <h1 className='privacy-page-header'>Privacy Policy</h1>
      <div className='privacy-paragraph'>
        <h2 className='privacy-paragraph-header'>Introduction</h2>
        <p className='privacy-content'>
          Protecting your private information is our priority. This Statement of
          Privacy applies to the AlgoNote Website and governs data collection
          and usage. For the purposes of this Privacy Policy, unless otherwise
          noted, all references to AlgoNote Webiste. The AlgoNote website is a
          Algorithm Notes Sharing site. By using the AlgoNote website, you
          consent to the data practices described in this statement.
        </p>
      </div>
      <div className='privacy-paragraph'>
        <h2 className='privacy-paragraph-header'>
          Collection and Usage of Personal Information
        </h2>
        <p className='privacy-content'>
          If you register at AlgoNote, we collect your username, password, notes
          you made . This information is used to complete the user
          authentication and fulfill the website's functionality.
        </p>
        <p className='privacy-content'>
          AlgoNote collects and uses your persional information to deliever the
          services you have requested. AlgoNote may also user your personally
          identifiable information to inform you of updates of notes and other
          new services.
        </p>
      </div>
      <div className='privacy-paragraph'>
        <h2 className='privacy-paragraph-header'>Cookies</h2>
        <p className='privacy-content'>
          AlgoNote uses essential cookies in order for the website to operate
          properly. For example, we use cookies to authenticate you. These
          cookies also facilitate the coming functionality of social media login
          (e.g., via Google, GitHub, Facebook, or LinkedIn) on AlgoNote.
        </p>
        <p className='privacy-content'>
          You have the ability to accept or decline cookies. Most desktop web
          browsers automatically accpet cookies, but you can manually change the
          browser settings to decline cookies you prefer.
        </p>
      </div>
      <div className='privacy-paragraph'>
        <h2 className='privacy-paragraph-header'>Data Security</h2>
        <p className='privacy-content'></p>
        <p className='privacy-content'>
          AlgoNote secures your personal information from unauthorized access,
          use, or disclosure. AlgoNote uses the SSL Protocol for this purpose:
          When personal information (such as a password) is transmitted to other
          websites, it is protected through the use of encryption - the Secure
          Sockets Layer (SSL) protocol.
        </p>
      </div>
      <div className='privacy-paragraph'>
        <h2 className='privacy-paragraph-header'>Contact Information</h2>
        <p className='privacy-content'>
          AlgoNote welcomes your questions or suggestions regarding this
          Statement of Privacy. If you have any questions regarding this
          statement. Feel free to drop a message through the contact page. We
          will get back to you within two business days.
        </p>
      </div>
    </div>
  );
}
