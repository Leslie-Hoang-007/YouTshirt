export const ItemDesc = ({itemSelected}) => {
    return (
        <div>
            {itemSelected.name}
            {itemSelected.price}
            {itemSelected.description}
            {itemSelected.sizes}
            {itemSelected.status}
        </div>
    );
}

export default ItemDesc;