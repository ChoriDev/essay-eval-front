import { Form, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="container">
      {/* TODO header 태그를 Navigation component로 변경 */}
      <header className="navigation" />
      <Form>
        <Form.Group>
          <Form.Label>하단에 에세이를 입력해주세요.</Form.Label>
          <Form.Control as={"textarea"} rows={13} maxLength={1000} />
        </Form.Group>
        <div>현재 글자수: 0 / 1000</div>
        <div className="submitBtnBox">
          <Button variant="primary" type="submit">
            제출하기
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Home;
