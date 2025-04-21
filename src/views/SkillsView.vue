<template>
  <div class="skills-container">
    <h1 class="skills-title">Skills</h1>
    
    <div class="skills-section">
      <h2 class="section-title">Frontend</h2>
      
      <div class="category-section">
        <h3 class="category-title">Programming Languages</h3>
        <div class="skills-grid">
          <div 
            v-for="skill in programmingLanguages" 
            :key="skill.name"
            class="skill-card"
          >
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <div class="category-section">
        <h3 class="category-title">Frameworks</h3>
        <div class="skills-grid">
          <div 
            v-for="skill in frameworks" 
            :key="skill.name"
            class="skill-card"
          >
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <div class="category-section">
        <h3 class="category-title">Libraries</h3>
        <div class="skills-grid">
          <div 
            v-for="skill in libraries" 
            :key="skill.name"
            class="skill-card"
          >
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const programmingLanguages = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' }
];

const frameworks = [
  { name: 'Vue3' },
  { name: 'Quasar' }
];

const libraries = [
  { name: 'Pinia' },
  { name: 'Vuetify' },
  { name: 'jQuery' }
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.skills-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-family: 'Noto Sans KR', sans-serif;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #34495e;
  font-family: 'Noto Sans KR', sans-serif;
  border-bottom: 2px solid #2196F3;
  padding-bottom: 0.5rem;
}

.category-section {
  margin-bottom: 2.5rem;
}

.category-title {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  padding-left: 0.5rem;
  border-left: 4px solid #2196F3;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.skill-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #2196F3, #64B5F6);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.skill-card:hover::before {
  opacity: 0.1;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c3e50;
  font-family: 'Noto Sans KR', sans-serif;
  z-index: 2;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .skill-name {
    font-size: 0.8rem;
  }
}
</style>
