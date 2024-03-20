import { Form, Button } from "react-bootstrap";
import Navbars from "../components/Navbars";

function Result() {
  return (
    <>
      <Navbars />
      <div className="container">
        <Form>
          <Form.Group className="textBox">
            <Form.Label>에세이 채점 결과</Form.Label>
            <Form.Control
              className="textArea"
              as="textarea"
              rows={15}
              maxLength={1000}
              readOnly
            />
          </Form.Group>
          <div className="btnBox">
            <Button variant="primary" type="submit">
              <img src="#" alt="돌아가기 아이콘" />
              다시 쓰기
            </Button>
          </div>
          <div className="btnContainer">
            <div className="btnBox">
              <Button variant="primary" type="submit">
                <img src="#" alt="출력 아이콘" />
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
