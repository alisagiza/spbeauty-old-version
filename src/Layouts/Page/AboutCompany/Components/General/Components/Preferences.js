import TitledTextInput from "../../../../../../Components/TitledTextInput";
import TitledSelector from "../../../../../../Components/TitledSelector";
import PrimaryButton from "../../../../../../Components/PrimaryButton";
function Preferences() {
    return (
        <div className='d-inline-flex flex-column gap-4 mt-5'>
            <div className='text-caption-rg'>
                <TitledTextInput title='Название компании' def='SPBEAUTY'/>
            </div>
            <div className='text-caption-rg'>
                <TitledSelector title='Тип организации' options={[
                'Салон красоты',
                'Парикмахерская'
            ]}/>
            </div>
            <div className='text-caption-rg'>
                <TitledTextInput title='Основной телефон для связи' def='+7 (912) 345-67-89'/>
            </div>
            <PrimaryButton>Сохранить</PrimaryButton>
        </div>
    );
}

export default Preferences;