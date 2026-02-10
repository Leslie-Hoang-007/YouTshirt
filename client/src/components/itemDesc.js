export const ItemDesc = ({ clothes, itemIndex }) => {

    const itemSelected = clothes[itemIndex];
    return (
        <div>
            <h2>
                {itemSelected?.name}
            </h2>
<h3>

            {itemSelected?.price}
</h3>
            <div className="separator-line" />
            <h3>Sizes</h3>
            {itemSelected?.sizes}
            <div className="separator-line" />
            {itemSelected?.description}
            <h3>Description</h3>
            <div className="separator-line" />
            {itemSelected?.status}
        </div>
    );
}

export default ItemDesc;