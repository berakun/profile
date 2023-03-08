import Landingpageadmin from '../components/adminComponents/landingpageadmin';
import Navbaradmin from '../components/adminComponents/navbaradmin';
import Table from '../components/adminComponents/pageadmin';


function Admin() {

    return (
        <div>
            <div className='w-screen'>
                <Navbaradmin />
            </div>
            <div className='bg-white'>
                <Table />
            </div>
            <div className='w-screen h-screen'>
                <Landingpageadmin />
            </div>
        </div>
    );
}

export default Admin;