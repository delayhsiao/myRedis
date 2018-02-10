<template>
    <div class="mainFrame">
        <div class="mainContent">
            <div class="loginTitle">Redis连接参数</div>
            <Form :label-width="50">
                <FormItem label="地址">
                    <Row>
                        <Col span="22">
                            <Input class="form-control" value="127.0.0.1" />
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="端口">
                    <Row>
                        <Col span="22">
                            <Input class="form-control" value="6379" />
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="密码">
                    <Row>
                        <Col span="22">
                            <Input class="form-control" />
                        </Col>
                    </Row>
                </FormItem>

                <Row class="formOption">
                    <Button type="info" @click="line">连接Redis</Button>
                </Row>
            </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import redisTool from '../libs/redisTool';

    export default {
        name: 'login',
        mounted () {

        },
        methods: {
            line() {
                redisTool.tables();
            }
        }
    }
</script>

<style>
    @import "../assets/css/common.css";

    .mainContent {
        width: 300px;
        background: #DDDDDD;
        margin: 100px auto;
        padding: 10px;
    }

    .loginTitle {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .mainContent .formOption {
        text-align: center;
    }
</style>