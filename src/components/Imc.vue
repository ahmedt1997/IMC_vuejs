<template>
  <form @submit.prevent="handleSubmit">
    <label>Poids (kg):</label>
    <input type="number" v-model="Poids" required min="15" max="220">

    <label>Taille (cm):</label>
    <input type="number" v-model="Taille" required min="100" max="250">



    <div class="submit">
      <button>Calculer</button>
    </div>
  </form>

  {{Imc}}
  <p>{{Result}}</p>


</template>

<script>
export default {
  data() {
    return {
      Poids : null,
      Taille : null,
      Imc:null,
      Result : ''

    }
  },
  methods: {
    addSkill($event) {
      if($event.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => {
        return skill !== item
      })
    },
    handleSubmit() {

      this.Imc = (this.Poids/Math.pow(this.Taille/100,2)).toFixed(2)

      if (this.Imc<16){
        this.Result = 'maigreur sévère'
      }
      else if (this.Imc>=16 && this.Imc<=16.99){
        this.Result = ' minceur modérée'
      }
      else if (this.Imc>=17 && this.Imc<=18.49){
        this.Result = '  minceur légère'
      }
       else if (this.Imc>=18.5 && this.Imc<=24.99){
        this.Result = 'poids normal'
      }

       else if (this.Imc>=25 && this.Imc<=29.99){
        this.Result = 'surpoids'
      }
       else if (this.Imc>=30&&this.Imc<=34.99){
        this.Result = ' obésité légère ou modérée'
      }
       else if (this.Imc>=35&&this.Imc<=39.99){
        this.Result = ' obésité dite sévère'
      }
       else if (this.Imc>=40){
        this.Result = 'obésité dite massive ou morbide'
      }







    }
  }
}
</script>

<style>
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