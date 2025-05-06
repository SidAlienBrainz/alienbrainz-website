import { LightningElement } from "lwc";
import abResources from '@salesforce/resourceUrl/abResources'; 

export default class AbsHeader extends LightningElement {
    // absIcons = absIcons;

    // // To handle the errors
    // handleError(error) {
    //     console.error("error: ", JSON.stringify(error));
    //     console.error("message: ", error.message);
    //     console.error("stack: ", error.stack);
    //     this.showToast("ERROR!", error.stack, "error");
    // }

    // // To display the toast message
    // showToast(title, message, variant) {
    //     const event = new ShowToastEvent({
    //         title: title,
    //         message: message,
    //         variant: variant,
    //         mode: "sticky"
    //     });
    //     this.dispatchEvent(event);
    // }

    // /**
    //  * This method will be called first time when this lwc loads.
    //  */
    // connectedCallback() {
    //     try {
    //         // toast message setup
    //         const toastContainer = ToastContainer.instance();
    //         toastContainer.maxShown = 5;
    //         toastContainer.toastPosition = "top-right";

    //         // add listner to document to handle hide & show to dropdown menus
    //         document.addEventListener("click", this.handleOutsideClick);

    //         // creating image links for the images & icons from the static resource
    //         this.testImg = absIcons + "/absIcons/ballon.svg";
    //         this.absLogo = absIcons + "/absIcons/abLogo.png";
    //         this.cloudIcon = absIcons + "/absIcons/cloud.svg";
    //         this.codeIcon = absIcons + "/absIcons/code.svg";
    //         this.databaseIcon = absIcons + "/absIcons/database.svg";
    //         this.lightningIcon = absIcons + "/absIcons/lightning.svg";

    //         this.peopleIcon = absIcons + "/absIcons/people.png";
    //         this.micIcon = absIcons + "/absIcons/mic.svg";
    //         this.rocketIcon = absIcons + "/absIcons/rocket.svg";
    //         this.shieldIcon = absIcons + "/absIcons/shield.svg";

    //         this.pageIcon = absIcons + "/absIcons/page.svg";
    //         this.ballonIcon = absIcons + "/absIcons/ballon.svg";
    //     } catch (error) {
    //         this.handleError(error);
    //     }
    // }

    // /**
    //  * This method is called when lwc is first rendered
    //  */
    // renderedCallback() {
    //     try {
    //         const servicesLink = this.template.querySelector(
    //             "[data-id='services-link']"
    //         );
    //         const aboutLink = this.template.querySelector(
    //             "[data-id='about-link']"
    //         );
    //         const inshightLink = this.template.querySelector(
    //             "[data-id='insight-link']"
    //         );

    //         const servicesDropdown = this.template.querySelector(
    //             "[data-id='services-dropdown']"
    //         );
    //         const insightDropdown = this.template.querySelector(
    //             "[data-id='insight-dorpdown']"
    //         );
    //         const aboutDropdown = this.template.querySelector(
    //             "[data-id='about-dorpdown']"
    //         );

    //         const menuTextContainers =
    //             this.template.querySelectorAll(".menu-text");

    //         /**
    //          * Hiding and showing the dropdown menus on clicking of there corresponding links
    //          */
    //         servicesLink.addEventListener("click", function (event) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             servicesDropdown.classList.toggle("show");

    //             // hiding other dropdown menus
    //             aboutDropdown.classList.remove("show");
    //             insightDropdown.classList.remove("show");
    //         });

    //         aboutLink.addEventListener("click", (event) => {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             aboutDropdown.classList.toggle("show");

    //             // hiding other dropdown menus
    //             servicesDropdown.classList.remove("show");
    //             insightDropdown.classList.remove("show");
    //         });

    //         inshightLink.addEventListener("click", (event) => {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             insightDropdown.classList.toggle("show");

    //             // hiding other dropdown menus
    //             aboutDropdown.classList.remove("show");
    //             servicesDropdown.classList.remove("show");
    //         });

    //         // whenever mouse enters or leaves the menu texts and there icons in the nav bar changing their color
    //         for (let i = 0; i < menuTextContainers.length; i++) {
    //             menuTextContainers[i].addEventListener("mouseenter", () => {
    //                 let link = menuTextContainers[i].querySelector(".nav-link");
    //                 if (link) link.style.setProperty("color", "#48acf0");
    //             });

    //             menuTextContainers[i].addEventListener("mouseleave", () => {
    //                 let link = menuTextContainers[i].querySelector(".nav-link");
    //                 if (link) link.style.setProperty("color", "");
    //             });
    //         }
    //     } catch (error) {
    //         this.handleError(error);
    //     }
    // }

    // /**
    //  * This methods is used to hide the dorpdown menus when user clicks anywhere on the document
    //  * @param {event} event (click event when user clicks anywhere on the document)
    //  */
    // handleOutsideClick = (event) => {
    //     try {
    //         event.preventDefault();
    //         const servicesDropdown = this.template.querySelector(
    //             "[data-id='services-dropdown']"
    //         );
    //         const servicesLink = this.template.querySelector(
    //             "[data-id='services-link']"
    //         );

    //         const aboutDropdown = this.template.querySelector(
    //             "[data-id='about-dorpdown']"
    //         );
    //         const aboutLink = this.template.querySelector(
    //             "[data-id='about-link']"
    //         );

    //         const insightDropdown = this.template.querySelector(
    //             "[data-id='insight-dorpdown']"
    //         );
    //         const insightLink = this.template.querySelector(
    //             "[data-id='insight-link']"
    //         );

    //         /** Check if the click is inside the dropdown or link; if not, hide the dropdown
    //          * we are trying to check if the click is inside the dropdown or link, but this
    //          * is not working as aspected, the event.target is always giving the whole lwc component
    //          * not the specific html element.c/absHeader
    //          *
    //          * Therefore I have added a work around, whenever user clicks anywhere on the document
    //          * any dropdown will disappear, but to stop if from hiding when user clicks on the dropdown
    //          * itself I have stop the propogation(bubbling) of the click event from the dropdown to the
    //          * document, and closing all the other dropdown except the current, all this code is written
    //          * in each of the nav bar link listners
    //          */
    //         if (
    //             servicesDropdown &&
    //             !servicesDropdown.contains(event.target) &&
    //             servicesLink &&
    //             !servicesLink.contains(event.target)
    //         ) {
    //             servicesDropdown.classList.remove("show");
    //         }

    //         if (
    //             aboutDropdown &&
    //             !aboutDropdown.contains(event.target) &&
    //             aboutLink &&
    //             !aboutLink.contains(event.target)
    //         ) {
    //             aboutDropdown.classList.remove("show");
    //         }

    //         if (
    //             insightDropdown &&
    //             !insightDropdown.contains(event.target) &&
    //             insightLink &&
    //             !insightLink.contains(event.target)
    //         ) {
    //             insightDropdown.classList.remove("show");
    //         }
    //     } catch (error) {
    //         this.handleError(error);
    //     }
    // };

    ablogo = '';
  downArrow = '';
  sfImplIcon = '';
  appExchangeIcon = '';
  dataInte = '';
  staffArgu = '';

  aboutUs = '';
  newsroom = '';
  careersIcon ='';
  compIcon = '';
  
  blogIcon = '';
  moreRes = '';






  connectedCallback() {
    this.ablogo = abResources + '/abResources/abLogo1.svg';

    this.downArrow = abResources + '/abResources/down-arrow.svg';
    this.appExchangeIcon = abResources + '/abResources/appExchange-development-icon.sv';
    
    this.sfImplIcon = abResources + '/abResources/salesforce-implementation-icon.svg';
    this.appExchangeIcon = abResources + '/abResources/appExchange-development-icon.svg';
    this.dataInte     = abResources + '/abResources/data-integration-icon.svg';
    this.staffArgu     = abResources + '/abResources/staff-augmentation-icon.svg';
    
    this.aboutUs= abResources+'/abResources/about-us-icon.svg';
    this.newsroom = abResources+'/abResources/newsroom-icon.svg';
    this.careersIcon = abResources+'/abResources/careers-icon.svg';
    this.compIcon = abResources+'/abResources/compliance-icon.svg';


    this.blogIcon = abResources+'/abResources/blog-icon.svg';
    this. moreRes= abResources+'/abResources/more-resource-icon.svg';





    console.log(this.ablogo);
    console.log(this.downArrow);
  }
}
