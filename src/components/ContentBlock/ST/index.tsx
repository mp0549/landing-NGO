import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import ContactModal from "./smodal";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleTeacherRegButtonClick = () => {
    setShowContactModal(true);
  };

  const handleStudentRegButtonClick = () => {
    setShowContactModal(true);
  };

  

  const handleModalClose = () => {
    setShowTeacherModal(false);
    
    setShowContactModal(false);
  };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
              <Button
  name="Student Reg"
  fixedWidth={true}
  onClick={handleStudentRegButtonClick}
 
>{t("Student Registration")}</Button>

<Button
  name="Teacher Reg"
  fixedWidth={true}
  onClick={handleTeacherRegButtonClick}
  
>{t("Teacher Registration")}</Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
        <ContactModal
          modalOpen={showContactModal}
          setModalOpen={setShowContactModal}
        />
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);