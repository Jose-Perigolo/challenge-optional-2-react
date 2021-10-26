import { FiCheckSquare } from 'react-icons/fi';
import { ModalEditFoodProps, UpdateFoodInterface } from '../../types'

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({isOpen, setIsOpen, handleUpdateFood, editingFood} : ModalEditFoodProps) => {

  const handleSubmit = async (data: UpdateFoodInterface ) => {
    handleUpdateFood(data);
    setIsOpen();
  };
  
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={null} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={null} />
          <Input name="price" placeholder="Ex: 19.90" icon={null} />

          <Input name="description" placeholder="Descrição" icon={null} />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalEditFood;
