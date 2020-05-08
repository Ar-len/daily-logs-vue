/* eslint-disable no-sequences */
import Vue from 'vue'
// 房屋征收情况查询模块
export default {
  namespaced: true,
  state: {
    backPath: '',
    activeTabKey: 'personInfo',
    isRefresh: true,
    addOrEdit: true,
    loadCommandDeptId: '',
    commandDeptInfo: {
      commandDept: {
        commandDeptName: '',
        contactInfor: '',
        contactAddress: '',
        establishDate: '',
        dissolutionDate: ''
      },
      commandDeptUser: [],
      commandDeptProject: []
    },
    searchPersonForm: {
      name: ''
    },
    searchProjectForm: {
      projectName: ''
    },
    commandDeptPostSList: [],
    regionSList: [],
    currentPersonResult: [],
    commandDeptPostEnum: {
      officer: 1,
      subOfficer: 2,
      groupLeader: 3,
      member: 4
    },
    userForm: {}
  },
  actions: {

  },
  mutations: {
    INIT_PORJECT_WIDGET (state) {
      state.searchProjectForm = {
        projectName: ''
      }
    },
    /**
     * 追加新数据，删除不存在数据
     *
     * @param {*} state
     * @param {*} personArray
     */
    INSERT_LIST_PERSONINFO (state, personArray) {
      if (personArray && personArray instanceof Array && state.currentPersonResult) {
        // tree新增的增加到currentPersonResult里
        personArray.forEach(item => {
          if (item.userId != null) {
            let isHas = state.currentPersonResult.some(person => {
              return person.userId === item.userId
            })
            if (!isHas) {
              state.currentPersonResult.push({
                realName: item.name,
                regionCode: item.regionCode,
                orgName: item.orgName,
                orgId: item.orgId,
                deptName: item.deptName,
                deptId: item.deptId,
                mobile: item.mobile,
                actualPost: item.actualPost,
                commandDeptPost: state.commandDeptPostEnum.member,
                userId: item.userId
              })
            }
          }
        })
        // tree减掉的从currentPersonResult删除
        for (let i = state.currentPersonResult.length - 1; i >= 0; i--) {
          let isTreeHas = personArray.some(item => {
            return item.userId === state.currentPersonResult[i].userId
          })
          if (!isTreeHas) {
            state.currentPersonResult.splice(i, 1)
          }
        }
      }
    },
    /**
     * 根据索引移除一条数据
     *
     * @param {*} state
     * @param {*} index
     */
    DEL_PERSON_LIST_ITEM (state, index) {
      if (state.commandDeptInfo && state.commandDeptInfo.commandDeptUser && state.commandDeptInfo.commandDeptUser.length >= 1) {
        state.commandDeptInfo.commandDeptUser.splice(index, 1)
      }
    },
    /**
     * 根据索引移除一条数据(当前数据)
     *
     * @param {*} state
     * @param {*} index
     */
    DEL_PERSON_LIST_ITEM_CURRENT (state, index) {
      if (state.currentPersonResult) {
        state.currentPersonResult.splice(index, 1)
      }
    },
    /**
     * 排序
     *
     * @param {*} state
     */
    SORT_PERSON_LIST (state) {
      if (state.commandDeptInfo && state.commandDeptInfo.commandDeptUser && state.commandDeptInfo.commandDeptUser.length >= 1) {
        state.commandDeptInfo.commandDeptUser.sortObject('commandDeptPost')
      }
    },
    /**
     * 排序
     *
     * @param {*} state
     */
    SORT_PERSON_LIST_CURRENT (state) {
      if (state.currentPersonResult && state.currentPersonResult) {
        state.currentPersonResult.sortObject('commandDeptPost')
      }
    },
    /**
     * 根据keyName设置对象值
     *
     * @param {*} state
     * @param {*} {keyName,data}
     */
    SET_STATE_OBJECT_VALUE (state, {
      keyName,
      data
    }) {
      if (keyName) {
        Vue.set(state, keyName, data)
      }
    },
    /**
     * 设置初始值
     *
     * @param {*} state
     * @param {*} {loadCommandDeptId,addOrEdit}
     */
    SET_LOAD_INFO (state, {
      loadCommandDeptId,
      addOrEdit
    }) {
      state.loadCommandDeptId = loadCommandDeptId
      state.addOrEdit = addOrEdit
    },
    /**
     * 设置初始值-是否是刷新过的页面
     *
     * @param {*} state
     * @param {*} isRefresh false.不是刷新的，true.是刷新的则返回首页
     */
    SET_IS_REFRESH (state, isRefresh) {
      state.isRefresh = isRefresh
    },
    /**
     * 设置人员表搜索字段值
     *
     * @param {*} state
     * @param {*} {keyName,data}
     */
    SET_SEARCH_FORM_VALUE (state, {
      keyName,
      data
    }) {
      if (keyName) {
        state.searchPersonForm[keyName] = data
      }
    },
    // 设置返回路径
    SET_BACK_PATH (state, {
      fullPath
    }) {
      state.backPath = fullPath
    },
    /**
     * 设置人员信息列表值
     *
     * @param {*} state
     * @param {*} data
     */
    SET_PERSONINFO_RESULT (state, data) {
      state.commandDeptInfo.commandDeptUser = data
    },
    /**
     * 设置一个人员数据
     *
     * @param {*} state
     * @param {*} data
     */
    SET_ONE_PERSON_INFO_DATA (state, {
      userId,
      commandDeptPost,
      actualPost
    }) {
      if (state.commandDeptInfo && state.commandDeptInfo.commandDeptUser && state.commandDeptInfo.commandDeptUser.length >= 0) {
        state.commandDeptInfo.commandDeptUser.map(item => {
        })
      }
    },
    /**
     * 添加一条项目信息
     *
     * @param {*} state
     * @param {*} projectInfo
     */
    INSERT_PROJECT_INFO (state, projectInfo) {
      if (state.commandDeptInfo && state.commandDeptInfo.commandDeptProject) {
        state.commandDeptInfo.commandDeptProject = [] // 目前一个指挥部针对一个项目，所以添加前作清空操作
        state.commandDeptInfo.commandDeptProject.push({
          projectAcceptenceId: projectInfo.acceptanceId,
          projectName: projectInfo.projectName,
          projectVersion: projectInfo.version,
          address: projectInfo.projectLocation

        })
      }
    },
    /**
     * 根据索引删除一条项目信息
     *
     * @param {*} state
     * @param {*} index
     */
    DEL_PROJECT_INFO_BY_INDEX (state, index) {
      if (state.commandDeptInfo && state.commandDeptInfo.commandDeptProject && state.commandDeptInfo.commandDeptProject.length >= 1) {
        state.commandDeptInfo.commandDeptProject.splice(index, 1)
      }
    }
  }
}
