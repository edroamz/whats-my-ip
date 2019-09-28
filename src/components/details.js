import React from 'react';

function formatData(data) {
  const { asn, languages, currency, time_zone, threat, ...others } = data;

  let arrOthers = [];
  let arrLang = [];
  let arrCurrency = [];
  let arrTimezone = [];
  let arrThreat = [];
  let arrAsn = [];

  arrOthers = CreateList(others);

  arrAsn = CreateList(asn);
  if (arrAsn.length) {
    arrAsn = AddTitle(arrAsn, 'Asn');
  }

  languages.forEach((item, index) => {
    arrLang.push(CreateList(languages[index]));
  });
  if (arrLang.length) {
    arrLang = AddTitle(arrLang, 'Languages');
  }

  arrCurrency = CreateList(currency);
  if (arrCurrency.length) {
    arrCurrency = AddTitle(arrCurrency, 'Currency');
  }

  arrTimezone = CreateList(time_zone);
  if (arrTimezone.length) {
    arrTimezone = AddTitle(arrTimezone, 'Time zone');
  }

  arrThreat = CreateList(threat);
  if (arrThreat.length) {
    arrThreat = AddTitle(arrThreat, 'Threat');
  }

  return (
    <section className='mb-3 mt-5'>
      {arrOthers}
      {arrAsn}
      {arrLang}
      {arrCurrency}
      {arrTimezone}
      {arrThreat}
    </section>
  );

  function IsPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  function CreateList(obj) {
    let tempList = [];

    if (IsPlainObject(obj)) {
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        // empty object
      } else {
        for (let [key, value] of Object.entries(obj)) {
          value &&
            tempList.push(
              <ul
                key={key}
                className='list-group ml-0 mb-2'
                style={{
                  backgroundColor: `rgb(23,42,69)`,
                  color: `rgb(230, 241, 255)`,
                  boxShadow: `rgba(2, 12, 27, 0.9) 0px 10px 30px -15px`,
                  paddingLeft: `1em`
                }}
              >
                <li
                  className='list-group-item pb-2 pt-4'
                  style={{
                    backgroundColor: `rgb(23,42,69)`,
                    border: `none`,
                    color: `#fff`
                  }}
                >
                  <h4>{key.toUpperCase()}</h4>
                </li>
                <li
                  className='list-group-item pt-0 pb-4'
                  style={{ backgroundColor: `rgb(23,42,69)`, border: `none` }}
                >
                  {value}
                </li>
              </ul>
            );
        }
      }
    }

    return tempList;
  }

  function AddTitle(arr, title) {
    if (Array.isArray(arr)) {
      arr.unshift(
        <center>
          <h3
            className='mt-5'
            style={{
              color: `rgb(230, 241, 255)`
            }}
          >
            {title}
          </h3>
        </center>
      );
    }

    return arr;
  }
}

const Details = ({ data }) => formatData(data);

export default Details;
