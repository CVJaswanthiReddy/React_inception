import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utilis/store";

test("Logo should load on rendering the header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const logo = header.getAllByTestId("logo");
  console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
});

test("online status should be green rendering the header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.className).toBe(
    "ml-2 w-2.5 h-2.5 rounded-full bg-green-500"
  );
});

test("cart should have zero items on rendering the header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  const cartItemCount = cart.textContent;

  expect(cartItemCount).toBe("0");
});
