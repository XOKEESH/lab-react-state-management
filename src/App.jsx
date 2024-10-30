import { useState } from 'react'
import './App.css'

const App = () => {
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const calculateTotalStrength = () => {
    return team.reduce((total, fighter) => total + fighter.strength, 0)
  }

  const calculateTotalAgility = () => {
    return team.reduce((total, fighter) => total + fighter.agility, 0)
  }

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam((prevTeam) => {
        const newTeam = [...prevTeam, fighter]
        setTotalStrength(calculateTotalStrength(newTeam))
        setTotalAgility(calculateTotalAgility(newTeam))
        return newTeam
      })
      setMoney(money - fighter.price)
    } else {
      alert('Not enough money to add this fighter!')
    }
  }

  const handleRemoveFighter = (index) => {
    setTeam((prevTeam) => {
      const fighterToRemove = prevTeam[index]
      const newTeam = prevTeam.filter((_, i) => i !== index)
      setTotalStrength(calculateTotalStrength(newTeam))
      setTotalAgility(calculateTotalAgility(newTeam))
      return newTeam;
    })
    setMoney((prevMoney) => prevMoney + team[index].price)
  }

  return (
    <div className="container">
      <div className="Header">
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      </div>

      <div className="team-section">
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members</p>
        ) : (
          <div className="team-list">
            {team.map((fighter, index) => (
              <div key={index} className="team-item">
                <img src={fighter.img} alt={fighter.name} />
                <ul>
                  <li>{fighter.name}</li>
                  <li>Price: ${fighter.price}</li>
                  <li>Strength: {fighter.strength}</li>
                  <li>Agility: {fighter.agility}</li>
                </ul>
                <button className="button" onClick={() => handleRemoveFighter(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
  
      <div className="fighters-section">
        <h2>Available Fighters</h2>
        <div className="fighter-list">
          {zombieFighters.map((fighter, index) => (
            <div key={index} className="fighter-item">
              <img src={fighter.img} alt={fighter.name} />
              <ul>
                <li>{fighter.name}</li>
                <li>Price: ${fighter.price}</li>
                <li>Strength: {fighter.strength}</li>
                <li>Agility: {fighter.agility}</li>
              </ul>
              <button className="button" onClick={() => handleAddFighter(fighter)}>Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
