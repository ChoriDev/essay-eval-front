import { Form, Button } from "react-bootstrap";
import Navbars from "../components/Navbars";
import styles from "../css/Result.module.css";
import backIcon from "../images/backIcon.png";
import printIcon from "../images/printIcon.png";

function Result() {
  return (
    <>
      <Navbars />
      <div className={styles.container}>
        <Form>
          <Form.Group className={styles.textBox}>
            <Form.Label>에세이 채점 결과</Form.Label>
            <Form.Control
              className={styles.textArea}
              as="textarea"
              rows={15}
              maxLength={1000}
              readOnly
            />
          </Form.Group>
          <div className={styles.btnContainer}>
            <div className={styles.btnBox}>
              <Button variant="primary" type="submit">
                <img src={backIcon} alt="돌아가기 아이콘" />
                다시 쓰기
              </Button>
            </div>
            <div className={styles.btnBox}>
              <Button variant="primary" type="submit">
                <img src={printIcon} alt="출력 아이콘" />
                결과 출력하기
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Result;
