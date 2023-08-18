import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () =>{
    (  
       <div className="col-10 pt-4">
            <h6 style={{ textDecoration: 'underline' }}>STUDENT REGISTRATION</h6>
            <form action="" className="row needs-validation g-3 py-3" noValidate method="POST">
                <div className="col-md-6">
                    <label htmlFor="inputfirstname" className="form-label">
                        First name<span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        id="inputfirstname"
                        placeholder="Enter Student's first name"
                        required
                    />
                    <div className="invalid-feedback">first name is required</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                    >Last Name <span className="text-danger">*</span></label
                    >
                    <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        id="inputlastname"
                        placeholder="Enter Student's last name"
                        required
                    />
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="inputmobile" className="form-label"
                    >Mobile<span className="text-danger">*</span></label
                    >
                    <input
                        type="tel"
                        name="mobile_num"
                        className="form-control"
                        id="inputmobile"
                        placeholder="Enter your Mobile number"
                        required
                    />
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="inputemail" className="form-label"
                    >E-mail<span className="text-danger">*</span></label
                    >
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="inputemail"
                        placeholder="Enter your email "
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputbranch" className="form-label">Branch</label>
                    <select id="inputbranch" className="form-select">
                        <option selected>Choose...</option>
                        <option>mech</option>
                        <option>civil</option>
                        <option>cs</option>
                    </select>
                </div>
                <fieldset className="row col-md-6">
                    <legend className="col-form-label col-md-6 pt-3">
                        Do you need hostel facility:
                    </legend>
                    <div className="col-sm-10 d-flex">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                                checked
                            />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                            />
                            <label className="form-check-label" htmlFor="gridRadios2"> No </label>
                        </div>
                    </div>
                </fieldset>
                <div>
                    <label htmlFor="inputemail" className="form-label"
                    >Choose branch you like :</label
                    >
                </div>
                <div className="col-md-12 d-md-flex justify-content-between">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Cyber security
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked1"
                            checked
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked1">
                            Artificial intelligence
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked2"
                            checked
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked2">
                            IOT
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                            checked
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked3">
                            Robotics
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                            checked
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked4">
                            Block chain
                        </label>
                    </div>
                </div>
                <div className="form-group col-8">
                    <label htmlFor="exampleFormControlTextarea1">
                        Permanent Address<span style={{ color: 'red' }}>*</span>
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="reset" className="btn btn-danger btn-sm">
                        Clear
                    </button>
                    <button type="submit" className="btn btn-success btn-sm">
                        Submit
                    </button>
                </div>
            </form>
        </div>
       
    );
}
export default FormComponent;





