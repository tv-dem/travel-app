import React from 'react';
import {cleanup } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CountryCard from "./Components/CountryCard/CountryCard";

afterEach(cleanup);


let container:any = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


type fakeCountryLcalizationsType={
  lang:string,
  capital:string,
  description:string,
  name:string
}

type fakeCountryType  = {
  imageUrl: string,
  localizations: Array<fakeCountryLcalizationsType>,
};

it("fetch country name", async () => {
  const fakeCountry:fakeCountryType  = {
imageUrl: "https://files.tpg.ua/pages2/87815/Italia_main.jpg",
localizations: [
  {lang: "en", capital: "Rome", name: "Italy", description: "Italy descriptions"},
  {lang: "ru", capital: "Рим", name: "Италия", description: "Ита́лия описание"},
],
  };

  jest.spyOn(global, "fetch").mockImplementation((): Promise<any> =>
    Promise.resolve({
      json: () => Promise.resolve(fakeCountry)
    })
  );

  await act(async () => {
    render(<CountryCard country={fakeCountry} language={"ru"} />, container);
  });

  expect(container.querySelector(".card_content-name").textContent).toBe(fakeCountry.localizations[1].name);

  await act(async () => {
    render(<CountryCard country={fakeCountry} language={"en"} />, container);
  });

  expect(container.querySelector(".card_content-name").textContent).toBe(fakeCountry.localizations[0].name);

});