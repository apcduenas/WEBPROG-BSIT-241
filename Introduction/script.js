const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      midtermGallery: [
        { 
          name: 'PROFILE PICTURE', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d10-e0083b1ba367f66b9d8974586fabe49f/views/imgpsh_fullsize' 
        },
        { 
          name: 'FRIENDS NATURE TRIP', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d10-1bbf8c277d6e703d4a5c49dacc706b92/views/imgpsh_fullsize' 
        },
        { 
          name: 'HAPPINESS', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-jhb-d11-ef642591a7f2e70a81c284a42bb698df/views/imgpsh_fullsize' 
        },
        { 
          name: 'Old picture me and my Dad', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d11-ff2328403abc0a4c7dfb036ab530333a/views/imgpsh_fullsize' 
        },
        { 
          name: 'My first trip to Bicol', 
          url: 'https://as-prod.asyncgw.teams.microsoft.com/v1/9f8d3607-32c4-4e7f-a4db-9861ebf737cc/objects/0-ea-d9-4ed8661b2f7b3daf2655b71f43bc72d3/views/imgpsh_fullsize' 
        }
      ],
      newItemName: '',
      skillsList: [
        { name: 'HTML5', important: true, found: true },
        { name: 'CSS3', important: true, found: true },
        { name: 'JavaScript', important: true, found: false },
        { name: 'Vue.js', important: false, found: false }
      ]
    }
  },
  methods: {
    addSkill() {
      if (this.newItemName.trim() !== '') {
        this.skillsList.push({
          name: this.newItemName,
          important: false,
          found: false
        });
        this.newItemName = '';
      }
    },
    triggerMotivation() {
      alert("Keep pushing forward and never give up on your dreams!");
      document.body.style.backgroundColor = "#ff6a00";
      setTimeout(() => {
        document.body.style.backgroundColor = "#0a0a0a";
      }, 200);
    },
    handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom >= 0) {
          section.style.borderLeftColor = "#ffcc00";
          section.style.boxShadow = "0 0 20px rgba(255, 106, 0, 0.2)";
        } else {
          section.style.borderLeftColor = "#e62117";
          section.style.boxShadow = "none";
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
});
app.mount('#app');