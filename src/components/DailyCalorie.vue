<template>
   <form @submit.prevent="handleSubmit">
    <label>poids (kg):</label>
    <input type="number" v-model="poids" required min="10" max="300">

    <label>taille (cm):</label>
    <input type="number" v-model="taille" required min="100" max="300">

    <label>age (ans):</label>
    <input type="number" v-model="age" required min="10" max="200">
<!--    <div v-if="passwordError" class="error">{{ passwordError }}</div>-->

    <label>sex:</label>
    <select v-model="sex">
      <option value="femme">femme</option>
      <option value="homme">homme</option>
    </select>
     <label>niveau d’activité:</label>
    <select v-model="nv">
      <option value="sédentaire">sédentaire</option>
      <option value="activité physique légère">activité physique légère</option>
      <option value="activité physique modérée">activité physique modérée</option>
      <option value="activité physique intense">activité physique intense</option>
    </select>

<!--    <label>Skills (press alt + comma to add):</label>-->
<!--    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">-->
<!--    <div v-for="skill in skills" :key="skill" class="pill">-->
<!--      <span @click="deleteSkill(skill)">{{ skill }}</span>-->
<!--    </div>-->

<!--    <div class="terms">-->
<!--      <input type="checkbox" v-model="terms" required>-->
<!--      <label>Accept terms and conditions</label>-->
<!--    </div>-->

    <div class="submit">
      <button>Calculer</button>
    </div>


  </form>

  <span v-if="Resultat">

    {{parseFloat(Resultat).toFixed(2)}} calories

  </span>





</template>

<script>
export default {
  name: "DailyCalorie",
  data() {
    return {
      poids:null,
      taille: null,
      sex: 'femme',
      nv: 'sédentaire',
      Resultat: null,
      age:null
      // terms: false,
      // skills: [],
      // tempSkill: '',
      // passwordError: null,
    }
  },
  methods: {

    handleSubmit() {

    if (this.sex==='homme'){
      this.Resultat=13.7516*this.poids+500.33*(this.taille/100)-6.7550*this.age+ 66.473;

      if(this.nv ==='sédentaire'){
         this.Resultat=this.Resultat*1.375
      }
      else if(this.nv ==='activité physique légère'){
        this.Resultat=this.Resultat*1.56
      }
      else if (this.nv ==='activité physique modérée'){
        this.Resultat=this.Resultat*1.64
      }
      else if (this.nv ==='activité physique intense'){
        this.Resultat=this.Resultat*1.82
      }
    }
    else if (this.sex === 'femme') {
      this.Resultat=9.5634*this.poids+184.96 *(this.taille/100)-4.6756*this.age + 655.0955;
      if(this.nv ==='sédentaire'){
        this.Resultat=this.Resultat*1.375
      }
      else if(this.nv ==='activité physique légère'){
        this.Resultat=this.Resultat*1.56
      }
      else if (this.nv ==='activité physique modérée'){
        this.Resultat=this.Resultat*1.64
      }
      else if (this.nv ==='activité physique intense'){
        this.Resultat=this.Resultat*1.82
      }
    }
    console.log(this.Resultat.toFixed(2))
    }
  }
}

</script>

<style scoped>
 form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill2 {
    text-align: center;

    padding-bottom: 20px;
    font-size: 40px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>