const commands = require('probot-commands-pro')

module.exports = (app) => {
  commands(app, 'ping', async (context) => {
    const issueComment = context.issue({
      body: '🤖️: pong',
    })
    return await context.octokit.issues.createComment(issueComment)
  })

  commands(app, 'review', async (context) => {
    const issueComment = context.issue({
      body: '🤖️: review in progress',
    })
    return await context.octokit.issues.createComment(issueComment)
  })

  commands(app, 'reaction', async (context) => {
    const commentReaction = context.issue({
      comment_id: context.payload.comment.id,
      content: '+1',
    })
    return await context.octokit.reactions.createForIssueComment(commentReaction)
  })

};
