import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SideBar = () => {
    return (
        <div className="col-md-2 border-end border-dark p-3 vh-100">
            <ul className="d-flex flex-column">
                <a href="#" className="py-3" style={{ textDecoration: 'none', color: 'black' }}>
                    <i className="bi bi-file-person-fill"></i>STUDENT
                </a>
                <a href="#" className="py-3" style={{ textDecoration: 'none', color: 'black' }}>
                    <i className="bi bi-person-video3"></i>STAFF
                </a>
                <a href="#" className="py-3" style={{ textDecoration: 'none', color: 'black' }}>
                    <i className="bi bi-card-checklist"></i>EXAM
                </a>
            </ul>
        </div>
    );
}

export default SideBar;