import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ProductForm from '../Update/ProductForm';
import {createProductForm} from '../../../actions/products';

class AddFormContainer extends Component {
    render() {
        const {categories, dispatch} = this.props;

        const addProduct = (data) => {
            dispatch(createProductForm(data))
        }

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={addProduct}
                    categories={categories}
                />
            </>
        );
    }
}

AddFormContainer.propTypes = {
    categories: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

export default connect(mapStateToProps)(AddFormContainer);
