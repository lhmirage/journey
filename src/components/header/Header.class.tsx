import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/logo.svg';
import { Input, Layout, Typography, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from "@ant-design/icons"
import { RootState } from "../../redux/store"
import { withTranslation, WithTranslation } from "react-i18next"
import { changeLanguageActionCreator, addLanguageActionCreator } from "../../redux/language/languageActions";
import { connect } from "react-redux"
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },

    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code)
      dispatch(action)
    }
  }
}

// ReturnType<typeof mapStateToProps> redux store 映射类型
class HeaderComponent extends React.Component<any & WithTranslation, ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {

  menuClickHandler = (e) => {
    if (e.key === "new") {
      // 处理新语言的添加
      this.props.addLanguage("新语言", "new_language")
    } else {
      this.props.changeLanguage(e.key)
    }
  }

  render() {
    const { t } = this.props
    console.log(t);

    return (
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.props.languageList.map((l) => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                  })}
                  <Menu.Item key={"new"}>
                    {t("header.add_new_language")}
                  </Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>
                {t("header.register")}
              </Button>
              <Button>
                {t("header.signin")}
              </Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span>
            <img src={logo} alt="logo" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder={"请输入旅游目的地、主题、或关键字"}
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
          <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
          <Menu.Item key="3"> {t("header.group")} </Menu.Item>
          <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
          <Menu.Item key="5"> {t("header.private")} </Menu.Item>
          <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
          <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
          <Menu.Item key="8"> {t("header.local")} </Menu.Item>
          <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
          <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
          <Menu.Item key="11"> {t("header.study")} </Menu.Item>
          <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
          <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
          <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
          <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
          <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HeaderComponent)) 