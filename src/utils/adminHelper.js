export const isAdmin = (userId) => {
    const adminIdsEnv = process.env.ADMIN_ID;
    if (!adminIdsEnv) return false;
    const adminIds = adminIdsEnv.split(',').map(id => id.trim());
    return adminIds.includes(userId.toString());
};
