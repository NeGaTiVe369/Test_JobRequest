export function CompanyOffers() {
    const offers = [
      "Дружный коллектив, интересные задачи и возможность быть услышанным;",
      "Приобретение ценных знаний в большой, развивающейся и сложноподчиненной структуре, зарегистрированной в сфере ИТ;",
      "Оформление в соответствии с ТК РФ;",
      "Полностью официальная заработная плата",
    ]
  
    return (
      <div className="company-offers">
        <h3>Мы предлагаем</h3>
        <ul>
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  