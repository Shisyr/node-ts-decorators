

export default interface BaseControllerInterface {
    register: () => void
    useMiddleWare?: () => void
}
