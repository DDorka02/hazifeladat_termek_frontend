
import { Nav } from "react-bootstrap";
import { Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
         <header className="App-header">
        <h1>Könyvek: </h1>
      </header>
      <Nav activeKey="/" className="navbar-light bg-warning">
        <Nav.Item>
          <Nav.Link href="/">Könyvek</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/urlap">Urlap</Nav.Link>
        </Nav.Item>
      </Nav>
        <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
            <footer>
        <p>Dobszay Dorka</p>
      </footer>
        </>
    );
};

export default Layout;
