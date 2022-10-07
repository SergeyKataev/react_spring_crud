import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService";
import {IPost} from "../models/IPost";
import {Avatar, Modal, Popconfirm, Radio, Table} from "antd";
import 'antd/dist/antd.css'
import FlavorForm from "./AddStudentFormTs";
import {successNotification} from "./Notification";



const PostContainer = (updateList: any) => {
    // @ts-ignore
    const {data: posts, error, isLoading} = postApi.useFetchAllUsersQuery()
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [removePost, {}] = postApi.useDeletePostMutation()
    const [isAddEmplModalVisible, setAddEmplModalVisible] = useState(false);


    const columns = [
        {
            title: '',
            key: 'employeeId',
            render(post: any) {
                return <Avatar size='large'>
                    {`${post.firstName.charAt(0).toUpperCase()}${post.lastName.charAt(0).toUpperCase()}`}
                </Avatar>;
            }
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (post: any) =>
                <Radio.Group>
                    <Popconfirm
                        placement='topRight'
                        title={`Are you sure to delete ${post.firstName}`}
                        onConfirm={() => removePost(post as IPost)}
                        okText='Yes'
                        cancelText='No'>
                        <Radio.Button value="small">Delete</Radio.Button>
                    </Popconfirm>
                    <Radio.Button
                        onClick={() => setAddEmplModalVisible(true)}
                        value="small">Edit</Radio.Button>
                </Radio.Group>
        },
    ];

    const handleCreate = async () => {
        setAddEmplModalVisible(true)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}

            <Table
                style={{marginBottom: '100px'}}
                dataSource={posts}
                columns={columns}
                rowKey={posts => posts.employeeId}
                pagination={false}
            />
            <Modal
                title='123456'
                open={isAddEmplModalVisible}
                onOk={() => setAddEmplModalVisible(false)}
                onCancel={() => setAddEmplModalVisible(false)}
                width={1000}
            >
                <FlavorForm
                    onSubmit={
                        (a: any)=> {
                            createPost(a);
                            updateList();
                            setAddEmplModalVisible(false);
                            successNotification('пользователь добавлен', a.firstName);
                        }
                    }
                />
            </Modal>
        </div>
    );
};

export default PostContainer;