import React from "react";
import { CartItem } from "../../molecules";
import { cartBookDataType } from "../../../Utilities/cartBook/CartBookDataType";
import { CartBookSection } from "../../../styles";

interface Props {
  cartDataList: cartBookDataType[];
}

const BookCartSection: React.FC<Props> = ({ cartDataList }) => {
  return (
    <CartBookSection>
      {cartDataList && cartDataList.length > 0
        ? cartDataList.map((cart, index) => {
            return (
              <CartItem
                icon={cart.icon}
                value={cart.value}
                description={cart.description}
              />
            );
          })
        : "Loading..."}
    </CartBookSection>
  );
};

export { BookCartSection };
