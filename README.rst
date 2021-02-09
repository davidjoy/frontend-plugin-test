|Build Status| |Codecov| |license|

frontend-plugin-test
=================================

Please tag **@edx/fedx-team** on any PRs or issues.  Thanks.

Introduction
------------

This repository is a template for Open edX micro-frontend applications. It is flagged as a Template Repository, meaning it can be used as a basis for new GitHub repositories by clicking the green "Use this template" button above.  The rest of this document describes how to work with your new micro-frontend after you've created a new repository from the template.

After Copying The Template
--------------------------

You'll want to do a find-and-replace to replace all instances of ``frontend-plugin-test`` with the name of your new repository.

**Prerequisite**

`Devstack <https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/installation/index.html>`_.  If you start Devstack with ``make dev.up.ecommerce`` that should give you everything you need as a companion to this frontend.

**Installation and Startup**

In the following steps, replace "frontend-plugin-test' with the name of the repo you created when copying this template above.

1. Clone your new repo:

  ``git clone https://github.com/edx/frontend-plugin-test.git``

2. Install npm dependencies:

  ``cd frontend-plugin-test && npm install``

3. Start the dev server:

  ``npm start``

The dev server is running at `http://localhost:7331 <http://localhost:7331>`_.

Project Structure
-----------------

The source for this project is organized into nested submodules according to the ADR `Feature-based Application Organization <https://github.com/edx/frontend-plugin-test/blob/master/docs/decisions/0002-feature-based-application-organization.rst>`_.

Build Process Notes
-------------------

**Production Build**

The production build is created with ``npm run build``.

Internationalization
--------------------

Please see `edx/frontend-platform's i18n module <https://edx.github.io/frontend-platform/module-Internationalization.html>`_ for documentation on internationalization.  The documentation explains how to use it, and the `How To <https://github.com/edx/frontend-i18n/blob/master/docs/how_tos/i18n.rst>`_ has more detail.

.. |Build Status| image:: https://api.travis-ci.com/edx/frontend-plugin-test.svg?branch=master
   :target: https://travis-ci.com/edx/frontend-plugin-test
.. |Codecov| image:: https://codecov.io/gh/edx/frontend-plugin-test/branch/master/graph/badge.svg
   :target: https://codecov.io/gh/edx/frontend-plugin-test
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-plugin-test.svg
   :target: @edx/frontend-plugin-test
