import { Menu } from "antd";
import {
  MailOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import LogoImg from "../../assets/image/anhhtus-logo 2.png";
import ship from "../../assets/frame/1.svg";
import styled from "styled-components";

const Header = () => (
  <Contaier mode="horizontal" defaultSelectedKeys={["mail"]}>
    <Logo src={LogoImg} alt="" />
    <Menu.Item key="mail" icon={<ShoppingCartOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
  </Contaier>
);
const Logo = styled.img`
  width: 60px;
  height: auto;
  border-radius: 25%;
`;
const Contaier = styled(Menu)`
  background-color: #d70018;
  padding: 0 200px;
`;

export default Header;
