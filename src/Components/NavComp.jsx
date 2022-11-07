import Nav from 'react-bootstrap/Nav';

function NavComp() {
    return (
        /* 여기서 화면을 이동하면 되니까.. navi를 사용하거나 라우터 개념을 응용해준다. */
        <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavComp;