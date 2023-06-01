import React ,{useState} from 'react';
import './App.css';
import TextField from './Components/TextFieldComponent/TextField';
import ModalComponent from './Components/ModalComponent/ModalComponent';

function App() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [dob, setDob] = useState();
  const [city, setCity] = useState();
  const [password, setPassword] = useState();
  const [isSubmitClicked, setIsSubmitclicked] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    window.location.reload() 
    setOpen(false)};

  const handleFirstNameChange = (event) => {
    const updatedFirstName = event.target.value;
    setFirstName(updatedFirstName);
    console.log(firstName);
  };

  const handleLastNameChange = (event) => {
    const updatedLastName = event.target.value;
    setLastName(updatedLastName);
    console.log(lastName);
  };

  const handleEmailIdChange = (event) => {
    const updatedEmailId = event.target.value;
    setEmailId(updatedEmailId);
    console.log(emailId);
  };

  const handleDobChange = (event) => {
    const updatedDob = event.target.value;
    setDob(updatedDob);
    console.log(dob);
  };

  const handleCityChange = (event) => {
    const updatedCity = event.target.value;
    setCity(updatedCity);
    console.log(city);
  };

  const handlePasswordChange = (event) => {
    const updatedPassword = event.target.value;
    setPassword(updatedPassword);
    console.log(password);
  };

  function handleSubmit()
  {
    if(firstName && lastName && emailId && password)
    {

      const data = {
        firstName: firstName,
        lastName: lastName,
        emailId : emailId,
        dob: dob,
        city: city,
        password: password
      };
      
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'data.json';
      link.click();
      
      URL.revokeObjectURL(url);
      setIsSubmitclicked(true);
      handleOpen();
    }
    else
    {
      alert("invalid");
    }
   }

  return (
    
      <div className="form">
        {isSubmitClicked?<ModalComponent open={open}  handleClose = {handleClose}/>:null}
        <div className='name'>
        <TextField type='text' className='name' name='firstName' value={firstName} onChange={handleFirstNameChange} placeholder='Enter Your First Name'/>
        <TextField type='text' className='name' name='lastName' value={lastName} onChange={handleLastNameChange} placeholder='Enter Your Last Name'/>
        </div>

        <div className='details'>
          <TextField type='email' className='emailId' name='emailId' value={emailId} onChange={handleEmailIdChange} placeholder='Enter Your E-mail Id'/>
          <label>Enter your date of birth </label>
          <TextField type='date' className='dob'  name='dob' value={dob} onChange={handleDobChange} />
          <TextField type='text' className='city' name='city' value={city} onChange={handleCityChange} placeholder='Enter Your city'/>

          <TextField type='password' className='password' name='password' value={password} onChange={handlePasswordChange} placeholder='Create Password'/>
        
        <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  );
}

export default App;
