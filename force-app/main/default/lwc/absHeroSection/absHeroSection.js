import { LightningElement } from 'lwc';
import abResources from '@salesforce/resourceUrl/abResources'; 

export default class AbsHeroSection extends LightningElement {
    heroSectionImg = '';
  heroBackgroundImg;


  connectedCallback() {
    this.heroSectionImg = abResources + '/abResources/hero-section-image.svg';
    this.heroBackgroundImg = abResources + '/abResources/semi-circle.svg';
  }


   words = ['Empower your Business ', 'Streamline your Operations ' , 'Drive smarter Decision ' , ' Automate What Matters ' , 'Personalize Every Interaction'];
  currentIndex = 0;
  interval;

  renderedCallback() {
    if (this.interval) return; // Prevent multiple intervals

    const el = this.template.querySelector('.typewriter');

    const showWord = () => {
      el.classList.remove('show');

      setTimeout(() => {
        el.textContent = this.words[this.currentIndex];
        el.classList.add('show');
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
      }, 500);
    };

    showWord();
    this.interval = setInterval(showWord, 2500);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }
}