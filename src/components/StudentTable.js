import 'bootstrap/dist/css/bootstrap.min.css';

const StudentTable = () => {
    return (
        <div className="col-10 pt-4">
            <div className="col-12 d-flex justify-content-between pb-4">
                <span style={{ textDecoration: 'underline' }}>STUDENT</span>
                <a href="inddex.html">
                    <button className="btn btn-success btn-sm" style={{ textDecoration: 'underline' }}>
                        Add Student
                    </button>
                </a>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">RNO.</th>
                        <th scope="col">FULL NAME</th>
                        <th scope="col">BRANCH</th>
                        <th scope="col">MOBILE</th>
                        <th scope="col">E-MAIL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>RONALDO</td>
                        <td>CIVIL</td>
                        <td>777777777</td>
                        <td>ronaldo@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>MESSI</td>
                        <td>MECH</td>
                        <td>100000000</td>
                        <td>messi@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>NEYMAR</td>
                        <td>CIVIL</td>
                        <td>11111111111</td>
                        <td>neymar@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
