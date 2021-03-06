import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { ModalAddFoodProps, AddFoodInterface } from '../../types';

const ModalAddFood = ({isOpen, setIsOpen, handleAddFood} : ModalAddFoodProps) => {

  const handleSubmit = async (data: AddFoodInterface) => {
    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={null} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={null} />
          <Input name="price" placeholder="Ex: 19.90" icon={null} />

          <Input name="description" placeholder="Descrição" icon={null} />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalAddFood;
