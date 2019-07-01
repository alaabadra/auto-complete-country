const dataRequist = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open(method, url);
  xhr.send();
};

const render = array => {
  array.forEach(element => {
    if (element.country === input.value.trim()) {
      name.textContent = input.value;
      capital.textContent = `Capital : ${element.capital}`;
      currncy.textContent = `Currncy : ${element.currency_code}`;
      pop.textContent = `Population : ${Number(element.population) /
        1000000} Million `;
    }
  });
};
