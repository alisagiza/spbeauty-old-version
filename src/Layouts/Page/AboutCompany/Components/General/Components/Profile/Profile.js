import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center gap-2'>
                <div className='title'>SPBEAUTY</div>
                <div className='d-inline-flex flex-column gap-1'>
                    <div className="color-text-rg">Салон красоты</div>
                    <div className='color-text-rg'>Санкт-Петербург, Невский пр-т. 28</div>
                </div>
            </div>                  
        </div>
    );
}

export default Profile;