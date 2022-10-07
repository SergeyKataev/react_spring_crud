import {Button, Form, Input, Select} from "antd";
import {postApi} from "../services/PostService";
import React from "react";
import {Field, Formik} from 'formik'
import * as Yup from 'yup';
import {IPost} from "../models/IPost";

const {Component} = require("react");
const inputButtonMargin = {marginBottom: '5px'};


class FlavorForm extends React.Component<{onSubmit: any},any> {
    constructor(props:any) {
        super(props);
        this.state = {
            firstName: '',
            lastname: '',
            email: '',
            gender: '',
            department: '',
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirstName(event:any) {

        this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event:any) {
        this.setState({lastName: event.target.value});
    }
    handleChangeEmail(event:any) {
        this.setState({email: event.target.value});
    }
    handleChangeGender(event:any) {
        this.setState({gender: event.target.value});
    }
    handleChangeDepartment(event:any) {
        this.setState({department: event.target.value});
    }

    handleSubmit(event:any) {
        if(this.state.firstName == "" ||
            this.state.lastName == "" ||
            this.state.email == ""   ||
            this.state.gender == ""   ||
            this.state.department == ""
        ) {
            alert('complete all ');
        }
        this.props.onSubmit(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <label>
                        FirstName:
                        <input type="text" value={this.state.value} onChange={this.handleChangeFirstName} />
                    </label>
                    <br/>

                    <label>
                        LastName:
                        <input type="text" value={this.state.value} onChange={this.handleChangeLastName} />
                    </label>
                    <br/>

                    <label>
                        Email:
                        <input type="text" value={this.state.value} onChange={this.handleChangeEmail} />
                    </label>
                    <br/>

                    Gender:
                    <select value={this.state.value} onChange={this.handleChangeGender}>
                        <option value=""> --- </option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                    </select>
                    <br/>
                    Department:
                    <select value={this.state.value} onChange={this.handleChangeDepartment}>
                        <option value=""> --- </option>
                        <option value="IT">IT</option>
                        <option value="FINANCE">FINANCE</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;