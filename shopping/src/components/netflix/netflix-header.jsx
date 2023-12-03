export function NetflixHeader() {
    return (
        <header className='d-flex justify-content-between p-4'>
            <div>
                <h4 className='text-danger fs-1 fw-bold'>NETFLIX</h4>
            </div>
            <div>
                <div className='input-group'>
                    <span className='bi bi-globe input-group-text'></span>
                    <select className='form-select'>
                        <option>Language</option>
                    </select>
                    <button className="btn btn-danger ms-2">Signin</button>
                </div>
            </div>
        </header>
    )
}