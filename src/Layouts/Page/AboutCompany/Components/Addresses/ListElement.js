import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #152842 0px;
    background-color: #FFFFFF;
    color: rgba(15, 23, 42, 1);
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 px-0 py-3'>{props.children}</Option>
            <EditIcon>
                <IconOnlyButton icon={<EditIcon/>}/>
            </EditIcon>
            <RemoveIcon>
                <IconOnlyButton icon={<RemoveIcon/>}/>
            </RemoveIcon>
        </div>
    );
}

export default ListElement;